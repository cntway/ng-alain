import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-user-trade-order-log',
  templateUrl: './user-trade-order-log.component.html',
})
export class UserTradeOrderLogComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
