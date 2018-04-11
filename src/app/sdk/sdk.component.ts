import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { NzMessageService } from 'ng-zorro-antd';
import { ModalHelper, _HttpClient, MenuService } from '@delon/theme';
import { ReuseTabService } from '@delon/abc';
import { Router } from '@angular/router';

import { SdkService } from './sdk.service';
import { NzModalSubject } from 'ng-zorro-antd';
import * as model_sdk from './sdk.model';
import * as users_enums from './sdk.users_enum';
import * as bcexs_enums from './sdk.bcexs_enum';
import * as admins_enums from './sdk.admins_enum';
import * as columns_app from './sdk.columns.app';
import * as columns_sdk from './sdk.columns';

import * as query_admins_enums from '@sdk/query/query.admins_enum';
import * as query_bcexs_enums from './query/query.bcexs_enum';
import * as query_columns_sdk from './query/query.columns';
import * as query_columns_app from './query/query.columns.app';
import { QuerySdkService } from './query/query.service';
import { SummodalComponent } from '@shared/summodal/summodal.component';
import { ExprotmodalComponent } from '@shared/exprotmodal/exprotmodal.component';

import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms'
import {
    UINT_LIAT,
    FLOAT_LIST,
    STRING_LIST,
    BYTE_LIST
} from '@sdk/sdk.util';


@Injectable()
export abstract class ComponentBase implements OnInit, OnDestroy {

    pi = 1;
    ps = 10;
    list: Array<any> = [];
    args: any = {};
    isInitLoad: boolean = false;
    sub: Subscription;
    _loading: boolean;
    total: null;
    admins_enums = admins_enums;
    users_enums = users_enums;
    bcexs_enums = bcexs_enums


    public abstract columns: Array<any>;
    public abstract deleteModel: any;
    public abstract editComponent: any;
    public abstract addComponent: any;
    public abstract loadData(): Observable<any>;
    public abstract deleteData(i: any);

    constructor(
        protected sdk: SdkService,
        protected message: NzMessageService,
        protected modalHelper: ModalHelper) {
    }

    ngOnInit() {
        /**
         * 加载手工配置
         */
        let columns_new = [];
        let pushed = [];
        for (const key in columns_app) {
            if (key in columns_sdk && columns_sdk[key] === this.columns) {
                for (const iterator of this.columns) {
                    let is_push = true;
                    for (const iterator_app of columns_app[key]) {
                        if (iterator['index'] === iterator_app['index']) {
                            is_push = false;
                            break;
                        }
                    }
                    if (is_push) {
                        pushed.push(iterator)
                    }
                }
                for (const colApp of columns_app[key]) {
                    if (!colApp['disabled']) {
                        columns_new.push(colApp)
                    }
                }
                columns_new.push(...pushed)
                this.columns = columns_new;
            }
        }

        if (this.isInitLoad) {
            this.load();
        }
    }

    ngOnDestroy() {
        try {
            if (this.sub) {
                this.sub.unsubscribe();
            }
        } catch (e) {
            console.error(e);
        }
    }

    /** 是否正在加载中 */
    get loading(): boolean {
        return this.sdk.loading;
    }

    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }
        this.sub = this.loadData()
            .subscribe(data => {
                if (!data) {
                    return;
                }
                this.list = data.results;
            });
    }

    edit(i) {
        const me = this;
        let component: Component = null;
        if (Object.keys(i).length === 0) {
            component = this.addComponent;
        } else {
            component = this.editComponent;
        }
        me.modalHelper.static(component, { i }, 600).subscribe((saveOk) => {
            // 操作成功回调
            if (saveOk) {
                me.load();
            }
        });
    }


    clear() {
        this.args = {};
    }

    showMsg(msg: string) {
        this.message.info(msg);
    }

    delete(i) {
        this.deleteData(i)
            .subscribe(data => {
                this.showMsg('删除成功');
                this.load(this.pi);
            });
    }

}


@Injectable()
export abstract class EditComponentBase implements OnInit {

    title;
    i: any;
    _isNew: boolean;
    validateForm: FormGroup;
    admins_enums = admins_enums;
    users_enums = users_enums;
    bcexs_enums = bcexs_enums

    abstract columns: any;
    abstract edit_model: any;
    abstract save(i: any): void;

    constructor(
        public http: _HttpClient,
        protected fb: FormBuilder,
        protected sdk: SdkService,
        protected subject: NzModalSubject) { }

    formatterPercent = value => `${value * 100}%`;
    parserPercent = value => parseFloat(value.replace('%', '')) / 100;

    ngOnInit() {
        this.isNew();
        const fields_options = this.edit_model.fields_options;
        const group = {}
        for (const index in fields_options) {
            const validator = this.getValidator(index, fields_options[index]);
            group[index] = validator;
            if (index === 'userpwd') {
                group['checkPassword'] = [null, [Validators.required, this.confirmationValidator]];
            }
        }
        console.log(group);
        this.validateForm = this.fb.group(group);


    }

    isNew() {

        if (Object.keys(this.i).length === 0) {
            this._isNew = true;
            this.title = '添加';

        } else {
            this._isNew = false;
            this.title = '修改';
            setTimeout(_ => {
                for (const f in this.validateForm.controls) {
                    if (!this.validateForm.controls[f].valid) {
                        this.validateForm.controls[f].markAsDirty();
                    }
                    this.validateForm.controls[f].updateValueAndValidity();
                }
            });
        }
    }

    getValidator(index, option) {
        const type = option['type'];
        const val = this._isNew ? null : this.i[index];

        if (this.isEmail(type, index)) {
            return [val, [Validators.email]];
        }
        if (this.isPwd(type, index)) {
            return [val, [Validators.required]];
        }
        if (this.isString(type, index)) {
            return [val, [Validators.required]];
        }
        //TODO
        return [val, [Validators.required]];

    }

    close() {
        this.subject.destroy();
    }

    getFieldName(key: string): string {
        for (let c of this.columns) {
            if (c.index === key) {
                return c.text;
            }
        }
        return key;
    }

    updateConfirmValidator() {
        /** wait for refresh value */
        setTimeout(_ => {
            this.validateForm.controls['checkPassword'].updateValueAndValidity();
        });
    }

    confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
        if (!control.value) {
            return { required: true };
        } else if (control.value !== this.validateForm.controls['userpwd'].value) {
            return { confirm: true, error: true };
        }
    };

    getFormControl(name) {
        return this.validateForm.controls[name];
    }


    isEmail(key: string, filedName: string): boolean {
        return filedName.indexOf('email') > -1
    }

    isPwd(key: string, filedName: string): boolean {
        return filedName === 'userpwd'
    }

    isString(key: string, filedName: string): boolean {
        if (filedName === 'userpwd') {
            return false;
        }
        if (filedName.indexOf('email') > -1) {
            return false
        }
        return STRING_LIST.indexOf(key) > -1 || BYTE_LIST.indexOf(key) > -1;
    }

    isDate(key: string, filedName: string): boolean {
        return key === 'date';
    }
    isDateTime(key: string, filedName: string): boolean {
        return key === 'datetime';
    }
    isNumber(key: string, filedName: string): boolean {
        return FLOAT_LIST.indexOf(key) > -1 || key === 'int32' || key === 'int64' || UINT_LIAT.indexOf(key) > -1;
    }
    isEnum(key: string, filedName: string): boolean {
        return key.length > 4 && key.slice(0, 4) === 'Enum';
    }

}

@Injectable()
export abstract class QueryComponentBase implements OnInit, OnDestroy {

    pi = 1;
    ps = 10;
    list: Array<any> = [];
    args: any = {};
    isInitLoad: boolean = false;
    sub: Subscription;
    _loading: boolean;
    total: null;
    modal: any;
    admins_enums = query_admins_enums;
    bcexs_enums = query_bcexs_enums


    public abstract columns: Array<any>;
    public abstract loadData(): Observable<any>;
    public abstract loadSumData(): Observable<any>;
    public abstract exportApi(): Observable<any>;

    constructor(
        protected router: Router,
        protected menuService: MenuService,
        protected subject: NzModalSubject,
        protected sdk: SdkService,
        protected querySdk: QuerySdkService,
        protected message: NzMessageService,
        protected modalHelper: ModalHelper) {
    }

    ngOnInit() {
        /**
         * 加载手工配置
         */
        let columns_new = [];
        let pushed = [];
        for (const key in query_columns_app) {
            if (query_columns_sdk.hasOwnProperty(key) && query_columns_sdk[key] === this.columns) {
                for (const iterator of this.columns) {
                    let is_push = true;
                    for (const iterator_app of query_columns_app[key]) {
                        if (iterator['index'] === iterator_app['index']) {
                            is_push = false;
                            break;
                        }
                    }
                    if (is_push) {
                        pushed.push(iterator)
                    }
                }
                for (const colApp of query_columns_app[key]) {
                    if (!colApp['disabled']) {
                        columns_new.push(colApp)
                    }
                }
                columns_new.push(...pushed)
                this.columns = columns_new;
            }
        }

        if (this.isInitLoad) {
            this.load();
        }
    }

    ngOnDestroy() {
        try {
            if (this.sub) {
                this.sub.unsubscribe();
            }
        } catch (e) {
            console.error(e);
        }
    }

    /** 是否正在加载中 */
    get loading(): boolean {
        return this.querySdk.loading;
    }

    load(pi?: number) {
        if (typeof pi !== 'undefined') {
            this.pi = pi || 1;
        }
        this.sub = this.loadData()
            .subscribe(data => {
                if (!data) {
                    return;
                }
                this.list = data.results;
            });
    }

    sum() {
        const me = this;
        this.sub = this.loadSumData()
            .subscribe(res => {
                if (!res) {
                    return;
                }
                me.modalHelper.static(SummodalComponent, { data: res.results, columns: me.columns }, 800).subscribe((saveOk) => {
                    // 操作成功回调
                    if (saveOk) {
                    }
                });
            });
    }

    export() {
        const me = this;
        me.modalHelper.static(ExprotmodalComponent, {}, 600).subscribe((modal) => {
            me.modal = modal;
            me.exportApi().subscribe((res => {
                me.modal.subject.destroy();
            }))
        });
    }

    clear() {
        this.args = {};
    }

    showMsg(msg: string) {
        this.message.info(msg);
    }

    getTitle() {
        const menus = this.menuService.getPathByUrl(this.router.url);
        for (const iterator of menus) {
            if (iterator['link'] === this.router.url) {
                return iterator['text']
            }
        }

    }
    
    makesops() {
        const show_options = [];
        for (const iterator of this.columns) {
            const tmp = {};
            const tmpOptions = {};
            if (iterator['disabled']) {
                continue
            }
            tmp['key'] = iterator['index'];
            tmp['cnname'] = iterator['text'];
            if (iterator['dataType'] === 'enum') {
                tmpOptions['enums'] = iterator['enum'];
            }
            tmp['options'] = tmpOptions;
            show_options.push(tmp);
        }
        return show_options;
    }

}