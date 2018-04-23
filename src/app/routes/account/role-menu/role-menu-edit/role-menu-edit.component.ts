
import { Component, ViewChild } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';
import { QueryParam, QueryOp } from '@sdk/sdk.util';

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


@Component({
    selector: 'app-role-menu-edit',
    templateUrl: './role-menu-edit.component.html',
})
export class RoleMenuEditComponent extends EditComponentBase {
    rolename = "xxsdfds";
    nodes = [];
    columns = skd_columns.sys_role_menu_get_columns;
    edit_model = new sdk_model.SysRoleMenuPut();

    @ViewChild('appMenuSelect') appMenuSelect: any;

    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.sys_role_menu_put_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

    ngOnInit() {
        this.isNew();
        const fields_options = this.edit_model.fields_options;
        const group = {};
        for (const index in fields_options) {
            const validator = this.getValidator(index, fields_options[index]);
            group[index] = validator;
            if (index === 'userpwd') {
                group['checkPassword'] = [null, [Validators.required, this.confirmationValidator]];
            }
        }
        this.validateForm = this.fb.group(group);
        const param = new QueryParam();
        param.key = 'roleid';
        param.value = this.i['roleid'];
        param.op = QueryOp.op_eq;
        this.sdk.sys_role_menu_get_api([param], 1, 9999).subscribe((res) => {
            const menuids = [];
            for (const iterator of res['results']) {
                menuids.push(iterator['menuid']);
            }
            // this.validateForm.controls['menuids'].setValue(menuids);
            this.appMenuSelect.nzValue = menuids;
        });
    }

    onEvent(ev: any) {
        console.log('basic', 'onEvent', ev);
    }


}
