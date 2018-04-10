
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as sdk_model from '@sdk/sdk.model';
import * as skd_columns from '@sdk/sdk.columns';
import { CoinCurrencyAddComponent } from './coin-currency-add/coin-currency-add.component';
// import { CoinCurrencyEditComponent } from './coin-currency-edit/coin-currency-edit.component';

@Component({
    selector: 'app-coin-currency',
    templateUrl: './coin-currency.component.html',
})
export class CoinCurrencyComponent extends ComponentBase {

    public deleteModel = sdk_model.CoinCurrencysDelete;
    public columns: Array<any> = skd_columns.coin_currencys_get_columns;
    public editComponent = null;
    public addComponent = CoinCurrencyAddComponent;

    loadData(): Observable<any> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key] + '%';
            qp.op = qp.op_like;
            parma_list.push(qp);
        });
        return this.sdk.coin_currencys_get_api(parma_list, this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    deleteData(data: any) {
        const param = Object.assign(new this.deleteModel(), data);
        return this.sdk.coin_currencys_delete_api(param);
    }


}
