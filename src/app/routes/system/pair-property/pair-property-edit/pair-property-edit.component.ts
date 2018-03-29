
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-pair-property-edit',
    templateUrl: './pair-property-edit.component.html',
})
export class PairPropertyEditComponent extends EditComponentBase {

    columns = skd_columns.pair_property_get_columns;
    edit_model = new sdk_model.PairPropertyPut();

    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        console.log(param);
        console.log(this.validateForm.getRawValue());
        console.log(Math.round(2 * 1.00));
        console.log(Math.floor(2 * 1.00));
        console.log(typeof ((Math.round(3.0 * 100) / 100).toFixed(4)));


        this.sdk.pair_property_put_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
