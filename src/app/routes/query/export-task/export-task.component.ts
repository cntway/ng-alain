
import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { QueryComponentBase } from '@sdk/sdk.component';
import { QueryParam } from '@sdk/sdk.util';
import * as query_skd_columns from '@sdk/query/query.columns';
import * as query_skd_model from '@sdk/query/query.model';

@Component({
    selector: 'app-export-task',
    templateUrl: './export-task.component.html',
})
export class ExportTaskComponent extends QueryComponentBase {

    public columns: Array<any> = query_skd_columns.report_csv_download_get_columns;

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
        return this.querySdk.report_csv_get_api(this.getQueryParams(), this.pi).map((res): any => {
            {
                return res;
            }
        });
    }

    loadSumData() {
        return this.querySdk.report_csv_get_api(this.getQueryParams())
    }

    exportApi() {
        return this.querySdk.report_csv_get_api(this.getQueryParams())
    }


    delete(data) {
        const deleteModel = new query_skd_model.ReportCsvDelete();
        deleteModel.taskid = data['task_id'];
        this.querySdk.report_csv_delete_api(deleteModel).subscribe((res) => {
            this.load();
        })
    }
}
