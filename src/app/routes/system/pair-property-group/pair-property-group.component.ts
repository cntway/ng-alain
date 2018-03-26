
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as sdk_model from '@sdk/sdk.model';
import * as skd_columns from '@sdk/sdk.columns';
import { PairPropertyGroupAddComponent } from './pair-property-group-add/pair-property-group-add.component';
import { PairPropertyGroupEditComponent } from './pair-property-group-edit/pair-property-group-edit.component';

@Component({
    selector: 'app-pair-property-group.component',
    templateUrl: './pair-property-group.component.html',
})
export class PairPropertyGroupComponent extends ComponentBase {

    public deleteModel = sdk_model.PairPropertyGroupDelete;
    public columns: Array<any> = skd_columns.pair_property_group_get_columns;
    public editComponent = PairPropertyGroupEditComponent;
    public addComponent = PairPropertyGroupAddComponent;

    loadData(): Observable<any> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key] + '%';
            qp.op = qp.op_like;
            parma_list.push(qp);
        });
        return this.sdk.pair_property_group_get_api(parma_list, this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    deleteData(data: any) {
        const param = Object.assign(new this.deleteModel(), data);
        return this.sdk.pair_property_group_delete_api(param);
    }


}
