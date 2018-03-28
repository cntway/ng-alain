
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-vip-privilege-add',
    templateUrl: './vip-privilege-add.component.html',
})
export class VipPrivilegeAddComponent extends EditComponentBase {

    columns = skd_columns.bonus_vip_privilege_get_columns;
    edit_model = new sdk_model.BonusVipPrivilegePost();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.bonus_vip_privilege_post_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
