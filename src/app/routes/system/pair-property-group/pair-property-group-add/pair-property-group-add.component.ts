
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-pair-property-group-add',
    templateUrl: './pair-property-group-add.component.html',
})
export class PairPropertyGroupAddComponent extends EditComponentBase {

    columns = skd_columns.pair_property_group_get_columns;
    edit_model = new sdk_model.PairPropertyGroupPost();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.pair_property_group_post_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
