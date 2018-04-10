
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { QueryComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as query_skd_columns from '@sdk/query/query.columns';

@Component({
    selector: 'app-exchange-money',
    templateUrl: './exchange-money.component.html',
})
export class ExchangeMoneyComponent extends QueryComponentBase {

    public columns: Array<any> = query_skd_columns.sys_exchmoney_query_get_columns;

    getQueryParams(): Array<QueryParam> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key];
            qp.op = qp.op_eq;
            parma_list.push(qp);
        });
        return parma_list;
    }

    loadData(): Observable<any> {
        return this.querySdk.sys_exchmoney_query_get_api(this.getQueryParams(), this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    loadSumData() {
        return this.querySdk.sys_exchmoney_sum_query_get_api(this.getQueryParams())
    }

}
        