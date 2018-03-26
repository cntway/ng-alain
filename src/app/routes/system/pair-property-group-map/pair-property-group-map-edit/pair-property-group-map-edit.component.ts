import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
    selector: 'app-pair-property-group-map-edit',
    templateUrl: './pair-property-group-map-edit.component.html',
})
export class PairPropertyGroupMapEditComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
