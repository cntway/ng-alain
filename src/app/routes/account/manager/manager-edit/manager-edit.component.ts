﻿
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-manager-edit',
    templateUrl: './manager-edit.component.html',
})
export class ManagerEditComponent extends EditComponentBase {

    columns = skd_columns.muser_users_get_columns;
    edit_model = new sdk_model.MuserUsersPut();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.muser_users_put_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
