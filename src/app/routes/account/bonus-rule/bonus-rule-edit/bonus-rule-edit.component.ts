import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-bonus-rule-edit',
  templateUrl: './bonus-rule-edit.component.html',
})
export class BonusRuleEditComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
