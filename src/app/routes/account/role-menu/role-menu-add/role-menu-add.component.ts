
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-role-menu-add',
    templateUrl: './role-menu-add.component.html',
})
export class RoleMenuAddComponent extends EditComponentBase {

    columns = skd_columns.sys_role_menu_get_columns;
    edit_model = new sdk_model.SysRoleMenuPut();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.sys_role_menu_put_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
