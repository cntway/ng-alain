import { Component, OnInit } from '@angular/core';
import { SdkService } from '@sdk/sdk.service';
import * as skd_columns from '@sdk/sdk.columns';
import { QueryParam } from '@sdk/sdk.util';
import { NzModalSubject } from 'ng-zorro-antd';

@Component({
    selector: 'app-find-table',
    templateUrl: './find-table.component.html',

})
export class FindTableComponent implements OnInit {
    _value: string;
    pi = 1;
    args: any = {};
    list = [];
    isVisible = false;
    nzMaskClosable = false;
    nzClosable = false;
    nzReadonly = true;
    total: null;
    public columns: Array<any> = skd_columns.sys_role_get_columns;

    select(data) {
        this.subject.next(data);
        this.close();
    }

    load(pi?: number) {
        const parma_list = [];
        Object.keys(this.args).forEach((key) => {
            const qp = new QueryParam();
            qp.key = key;
            qp.value = this.args[key] + '%';
            qp.op = qp.op_like;
            parma_list.push(qp);
        });
        this.sdk.sys_role_get_api(parma_list)
            .subscribe(data => {
                if (!data) {
                    return;
                }
                this.list = data.results;
            });
    }
    constructor(
        public sdk: SdkService,
        protected subject: NzModalSubject
    ) { }

    ngOnInit() {
    }
    close() {
        this.subject.destroy();
    }

}
