
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-manager-add',
    templateUrl: './manager-add.component.html',
})
export class ManagerAddComponent extends EditComponentBase {

    columns = skd_columns.muser_users_get_columns;
    edit_model = new sdk_model.MuserUsersPost();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.muser_users_post_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
