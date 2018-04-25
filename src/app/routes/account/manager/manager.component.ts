
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as sdk_model from '@sdk/sdk.model';
import * as skd_columns from '@sdk/sdk.columns';
import { ManagerAddComponent } from './manager-add/manager-add.component';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
})
export class ManagerComponent extends ComponentBase {

    public deleteModel = sdk_model.MuserUsersDelete;
    public columns: Array<any> = skd_columns.muser_users_get_columns;
    public editComponent = ManagerEditComponent;
    public addComponent = ManagerAddComponent;

    loadData(): Observable<any> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key] + '%';
            qp.op = qp.op_like;
            parma_list.push(qp);
        });
        return this.sdk.muser_users_get_api(parma_list, this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    deleteData(data: any) {
        const param = Object.assign(new this.deleteModel(), data);
        return this.sdk.muser_users_delete_api(param);
    }


}
