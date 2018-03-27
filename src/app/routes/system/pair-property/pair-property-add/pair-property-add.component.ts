
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-pair-property-add',
    templateUrl: './pair-property-add.component.html',
})
export class PairPropertyAddComponent extends EditComponentBase {
    pairLoad = this.sdk.coin_pair_get_api([]);
    columns = skd_columns.pair_property_get_columns;
    edit_model = new sdk_model.PairPropertyPost();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.pair_property_post_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
