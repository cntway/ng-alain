import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-summodal',
    templateUrl: './summodal.component.html',
})
export class SummodalComponent implements OnInit {
    columns;
    cols = [];
    data = [];

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
        if (this.data.length > 0) {
            this.cols = [];
            for (const key in this.data[0]) {
                let tmp = {}
                if (key === 'count') {
                    tmp = { index: key, text: '行数', dataType: 'string' }
                } else {
                    for (const iterator of this.columns) {
                        if (iterator['index'] === key) {
                            tmp = iterator
                            break;
                        }
                    }
                }
                this.cols.push(tmp);
            }

        }

    }

}
