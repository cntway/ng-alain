
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { ComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as sdk_model from '@sdk/sdk.model';
import * as skd_columns from '@sdk/sdk.columns';
import { BonusRuleAddComponent } from './bonus-rule-add/bonus-rule-add.component';
import { BonusRuleEditComponent } from './bonus-rule-edit/bonus-rule-edit.component';

@Component({
    selector: 'app-bonus-rule',
    templateUrl: './bonus-rule.component.html',
})
export class BonusRuleComponent extends ComponentBase {

    public deleteModel = sdk_model.BonusRuleDelete;
    public columns: Array<any> = skd_columns.bonus_rule_get_columns;
    public editComponent = BonusRuleEditComponent;
    public addComponent = BonusRuleAddComponent;

    loadData(): Observable<any> {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            console.log(this.args[key])
            console.log(typeof (this.args[key]))

            if (typeof (this.args[key]) != "undefined" && this.args[key] !== '') {
                const qp = new QueryParam();
                qp.key = key;
                qp.value = this.args[key];
                qp.op = qp.op_gt;
                parma_list.push(qp);
            }

        });
        return this.sdk.bonus_rule_get_api(parma_list, this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    deleteData(data: any) {
        const param = Object.assign(new this.deleteModel(), data);
        return this.sdk.bonus_rule_delete_api(param);
    }


}
