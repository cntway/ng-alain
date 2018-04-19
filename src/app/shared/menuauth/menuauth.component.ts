import { Component, OnInit, Input, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SdkService } from '@sdk/sdk.service';
import { QueryParam, QueryOp } from '@sdk/sdk.util';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-menuauth',
    templateUrl: './menuauth.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MenuauthComponent),
            multi: true
        }
    ],
})
export class MenuauthComponent implements OnInit {
    public isVisible = false;
    public loading = false;
    public nzCheckable = true;
    public curNode;
    @ViewChild('treeModel') treeModel: any;
    public nodes = [];
    @Input()
    public checkedNodes = [];
    @Input()
    public showText: string = `${this.checkedNodes.length}项已选择`;
    public nzReadonly = true;
    options = {
        getChildren: (node: any) => {
            return node.data.children;
        }
    };

    _value: string;
    onChange: any = Function.prototype;
    onTouched: any = Function.prototype;

    get nzValue(): any {
        return this._value;
    }

    set nzValue(value: any) {
        if ((this._value === value) || (((this._value === undefined) || (this._value === null)) && ((value === undefined) ||
            (value === null)))) {
            return;
        }
        this._value = value;
        this.onChange(value);

    }
    writeValue(value: any): void {
        this._value = value;
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }
    constructor(private sdk: SdkService, private msg: NzMessageService) { }

    ngOnInit() {
        console.log(this.treeModel);
    }

    handleOk = (e?: Event) => {
        if (e) {
            e.preventDefault();
        }
        const nodeList = this.convertTreeToList(this.treeModel.treeModel.nodes);
        this.checkedNodes = [];
        for (const iterator of nodeList) {
            console.log(iterator);
            if (iterator['halfChecked'] | iterator['checked']) {
                this.checkedNodes.push(iterator['id']);
            }
        }
        console.log(this.checkedNodes);
        this.nzValue = this.checkedNodes;
        this.showText = `${this.checkedNodes.length}项已选择`;
        this.isVisible = false;
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.isVisible = false;

    }

    showModal = () => {
        if (this.nodes.length === 0) {
            this.sdk.sys_menu_get_api([], 1, 99999).map((data) => {
                const results = data['results'];
                for (const row of data['results']) {
                    row['name'] = row['menuname'];
                    row['id'] = row['menuid'];
                }
                results.push({
                    "name": "根目录",
                    "id": 0,
                    "menuid": 0,
                    "menuname": "根目录",
                    "sortid": 0,
                    "parentid": -1,
                    "parentids": ","
                })

                return results;
            }).subscribe((res) => {
                this.nodes = this.transData(res, 'menuid', 'parentid', 'children');
            });
        }
        this.isVisible = true;
    }

    select() {
        this.handleOk();
    }

    nzFocus(ev: any) {
        this.curNode = ev.node;
    }

    onEvent(ev: any) {
        const me = this;
        if (ev['eventName'] === 'initialized') {
            if ((this._value === undefined) || (this._value === null) || (this._value === '')) {
                return;
            }
            const queryParam = new QueryParam('menuid', this._value, QueryOp.op_eq);
            this.sdk.sys_menu_get_api([queryParam], 1, 1).subscribe((res) => {
                if (res['results'].length === 1) {
                    me.showText = res['results'][0]['menuname'];
                }
            });

        }
    }

    transData(a, idStr, pidStr, childrenStr) {
        let i = 0, j = 0;
        const r = [], hash = {}, id = idStr, pid = pidStr, children = childrenStr, len = a.length;
        for (; i < len; i++) {
            hash[a[i][id]] = a[i];
        }
        for (; j < len; j++) {
            const aVal = a[j], hashVP = hash[aVal[pid]];
            if (typeof (hashVP) !== 'undefined') {
                if (!hashVP[children]) {
                    hashVP[children] = [];
                }
                hashVP[children].push(aVal);
                hashVP['hasChildren'] = true;
            } else {
                r.push(aVal);
            }
        }
        return r;
    }
    convertTreeToList(jsonTree, tmpArray = []) {
        for (const node of jsonTree) {
            if (node.children && node.children.length > 0) {
                const tmpTree = node.children;
                tmpArray.push({ id: node["id"], name: node["menuname"], checked: node["checked"], halfChecked: node['halfChecked'] });
                tmpArray = this.convertTreeToList(tmpTree, tmpArray);
            } else {
                tmpArray.push({ id: node["id"], name: node["menuname"], checked: node["checked"], halfChecked: node['halfChecked'] });
            }
        }
        return tmpArray
    }


}
