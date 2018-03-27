
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-pair-property-group-map-add',
    templateUrl: './pair-property-group-map-add.component.html',
})
export class PairPropertyGroupMapAddComponent extends EditComponentBase {
    propertyGroupLoad = this.sdk.pair_property_group_get_api([]);
    propertyLoad = this.sdk.pair_property_get_api([]);
    columns = skd_columns.pair_property_group_map_get_columns;
    edit_model = new sdk_model.PairPropertyGroupMapPost();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.pair_property_group_map_post_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
