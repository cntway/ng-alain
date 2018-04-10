import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzModalSubject, NzMessageService } from 'ng-zorro-antd';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms'

@Component({
    selector: 'app-exprotmodal',
    templateUrl: './exprotmodal.component.html',
})
export class ExprotmodalComponent implements OnInit {
    i: any;
    validateForm: FormGroup;

    constructor(
        public http: _HttpClient,
        private subject: NzModalSubject,
        protected fb: FormBuilder,
    ) {
        const group = {}
        group['csvdesc'] = [null, [Validators.required]];
        this.validateForm = this.fb.group(group);
    }

    ngOnInit() {
        console.log(this.subject);
    }


    save() {
        this.i = this.validateForm.getRawValue();
        this.subject.next(this);
    }

    close() {
        this.subject.destroy();
    }
}
