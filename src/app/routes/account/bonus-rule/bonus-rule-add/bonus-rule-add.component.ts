
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-bonus-rule-add',
    templateUrl: './bonus-rule-add.component.html',
})
export class BonusRuleAddComponent extends EditComponentBase {
    pairLoad = this.sdk.coin_pair_get_api([]);
    columns = skd_columns.bonus_rule_get_columns;
    edit_model = new sdk_model.BonusRulePost();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.bonus_rule_post_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
