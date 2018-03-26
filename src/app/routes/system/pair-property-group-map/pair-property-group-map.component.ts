import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-pair-property-group-map',
  templateUrl: './pair-property-group-map.component.html',
})
export class PairPropertyGroupMapComponent implements OnInit {

    constructor(
        private http: _HttpClient
    ) { }

    ngOnInit() {
    }

}
