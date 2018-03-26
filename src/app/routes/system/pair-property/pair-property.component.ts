
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as sdk_model from '@sdk/sdk.model';
import * as skd_columns from '@sdk/sdk.columns';
import { PairPropertyAddComponent } from './pair-property-add/pair-property-add.component';
import { PairPropertyEditComponent } from './pair-property-edit/pair-property-edit.component';

@Component({
    selector: 'app-pair-property',
    templateUrl: './pair-property.component.html',
})
export class PairPropertyComponent extends ComponentBase {

    public deleteModel = sdk_model.PairPropertyDelete;
    public columns: Array<any> = skd_columns.pair_property_get_columns;
    public editComponent = PairPropertyEditComponent;
    public addComponent = PairPropertyAddComponent;

    loadData(): Observable<any> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key] + '%';
            qp.op = qp.op_like;
            parma_list.push(qp);
        });
        return this.sdk.pair_property_get_api(parma_list, this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    deleteData(data: any) {
        const param = Object.assign(new this.deleteModel(), data);
        return this.sdk.pair_property_delete_api(param);
    }


}
