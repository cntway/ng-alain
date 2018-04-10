
import { Component } from '@angular/core';
import { EditComponentBase } from '@sdk/sdk.component';
import * as skd_columns from '@sdk/sdk.columns';
import * as sdk_model from '@sdk/sdk.model';

@Component({
    selector: 'app-coin-currency-add',
    templateUrl: './coin-currency-add.component.html',
})
export class CoinCurrencyAddComponent extends EditComponentBase {
    coinLoad = this.sdk.coin_info_get_api([]);
    marketLoad = this.sdk.bcex_market_get_api([]);
    columns = skd_columns.coin_currencys_get_columns;
    edit_model = new sdk_model.CoinCurrencysPost();
    save() {
        const param = Object.assign(this.edit_model, this.validateForm.getRawValue());
        this.sdk.coin_currencys_post_api(param).subscribe((res) => {
            this.subject.next('onOk');
            this.close();
        });
    }

}
