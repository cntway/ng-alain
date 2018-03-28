
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as sdk_model from '@sdk/sdk.model';
import * as skd_columns from '@sdk/sdk.columns';
import { VipPrivilegeAddComponent } from './vip-privilege-add/vip-privilege-add.component';
import { VipPrivilegeEditComponent } from './vip-privilege-edit/vip-privilege-edit.component';

@Component({
    selector: 'app-vip-privilege',
    templateUrl: './vip-privilege.component.html',
})
export class VipPrivilegeComponent extends ComponentBase {

    public deleteModel = sdk_model.BonusVipPrivilegeDelete;
    public columns: Array<any> = skd_columns.bonus_vip_privilege_get_columns;
    public editComponent = VipPrivilegeEditComponent;
    public addComponent = VipPrivilegeAddComponent;

    loadData(): Observable<any> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key] + '%';
            qp.op = qp.op_like;
            parma_list.push(qp);
        });
        return this.sdk.bonus_vip_privilege_get_api(parma_list, this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    deleteData(data: any) {
        const param = Object.assign(new this.deleteModel(), data);
        return this.sdk.bonus_vip_privilege_delete_api(param);
    }


}
