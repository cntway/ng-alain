import { Component, OnInit } from '@angular/core';
import { NzModalSubject, NzMessageService } from 'ng-zorro-antd';
import { SdkService } from '@sdk/sdk.service';
import * as model_sdk from '@sdk/sdk.model';
import * as enum_sdk from '@sdk/sdk.enum';
import { _HttpClient } from '@delon/theme';


@Component({
    selector: 'app-menu-edit',
    templateUrl: './menu-edit.component.html',
})

export class MenuEditComponent implements OnInit {
    i: any;
    is_new: boolean;
    title: string;
    searchFunckeyOptions = [];
    funckeyOptions = [];
    iconOptions = [
        { value: 'anticon-file', label: 'file' },
        { value: 'icon-chemistry', label: 'elements' },
        { value: 'icon-grid', label: 'grid' },
        { value: 'icon-user', label: 'user' }
    ];
    booleanOptions = [
        { value: 1, label: '是' },
        { value: 0, label: '否' }
    ];

    constructor(
        public http: _HttpClient,
        private subject: NzModalSubject,
        public msgSrv: NzMessageService,
        public sdk: SdkService) { }

    ngOnInit() {
        console.log(this.i);
        if (this.i.id > 0) {
            this.is_new = false;
            this.title = '修改';
        } else {
            this.is_new = true;
            this.title = '添加';
        }
        this.http.get('/devel/client_api_config_json').subscribe((res: any) => {
            this.funckeyOptions = [];
            for (const key in res) {
                this.funckeyOptions.push({ value: res[key]['api_key'], label: res[key]['api_key'] }, );
            }
            this.searchFunckeyOptions = this.funckeyOptions;
        });
    }

    searchFunckey(event) {
        this.searchFunckeyOptions = [];
        for (let option of this.funckeyOptions) {
            console.log(option);
            if (option['value'].indexOf(event) > -1) {
                this.searchFunckeyOptions.push(option);
            }
        }
    }
    save(e) {
        if (this.is_new) {
            this.add();
        } else {
            this.update();
        }
    }

    update() {
        const param = new model_sdk.SysMenuPut();
        param.menuid = this.i.menuid;
        param.parentids = '';
        param.isshow = this.i.isshow;
        param.parentid = parseInt(this.i.parentid);
        param.productid = 1;
        param.isstop = 0;
        param.sortid = parseInt(this.i.sortid);
        param.menuname = this.i.menuname;
        param.pagehref = this.i.pagehref;
        param.commituri = this.i.pagehref;
        param.remark = this.i.remark;
        param.funckey = this.i.funckey;
        param.apikey = this.i.funckey;

        this.sdk.sys_menu_put_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

    add() {
        const param = new model_sdk.SysMenuPost();
        param.isshow = this.i.isshow;
        param.parentid = parseInt(this.i.parentid);
        param.productid = 1;
        param.apikey = '';
        param.isstop = 0;
        param.sortid = parseInt(this.i.sortid);
        param.menuname = this.i.menuname;
        param.pagehref = this.i.pagehref;
        param.commituri = this.i.pagehref;
        param.remark = this.i.remark;
        param.funckey = this.i.funckey;

        this.sdk.sys_menu_post_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }


    close() {
        this.subject.destroy();
    }
}

