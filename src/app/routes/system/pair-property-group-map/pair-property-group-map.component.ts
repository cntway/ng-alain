
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as sdk_model from '@sdk/sdk.model';
import * as skd_columns from '@sdk/sdk.columns';
import { PairPropertyGroupMapAddComponent } from './pair-property-group-map-add/pair-property-group-map-add.component';
import { PairPropertyGroupMapEditComponent } from './pair-property-group-map-edit/pair-property-group-map-edit.component';

@Component({
    selector: 'app-pair-property-group-map',
    templateUrl: './pair-property-group-map.component.html',
})
export class PairPropertyGroupMapComponent extends ComponentBase {

    public deleteModel = sdk_model.PairPropertyGroupMapDelete;
    public columns: Array<any> = skd_columns.pair_property_group_map_get_columns;
    public editComponent = PairPropertyGroupMapEditComponent;
    public addComponent = PairPropertyGroupMapAddComponent;

    loadData(): Observable<any> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key] + '%';
            qp.op = qp.op_like;
            parma_list.push(qp);
        });
        return this.sdk.pair_property_group_map_get_api(parma_list, this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    deleteData(data: any) {
        const param = Object.assign(new this.deleteModel(), data);
        return this.sdk.pair_property_group_map_delete_api(param);
    }


}
