
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as sdk_model from '@sdk/sdk.model';
import * as skd_columns from '@sdk/sdk.columns';
import { RoleMenuAddComponent } from './role-menu-add/role-menu-add.component';
import { RoleMenuEditComponent } from './role-menu-edit/role-menu-edit.component';

@Component({
    selector: 'app-role-menu',
    templateUrl: './role-menu.component.html',
})
export class RoleMenuComponent extends ComponentBase {

    public deleteModel = sdk_model.SysRoleDelete;
    public columns: Array<any> = skd_columns.sys_role_get_columns;
    public editComponent = RoleMenuEditComponent;
    public addComponent = RoleMenuAddComponent;

    loadData(): Observable<any> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key] + '%';
            qp.op = qp.op_like;
            parma_list.push(qp);
        });
        return this.sdk.sys_role_get_api(parma_list, this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    deleteData(data: any) {
        const param = Object.assign(new this.deleteModel(), data);
        return this.sdk.sys_role_menu_get_api(param);
    }


}
