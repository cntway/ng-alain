import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ModalHelper } from '@delon/theme';
import { FindTableComponent } from '../find-table/find-table.component'
import { SdkService } from '@sdk/sdk.service';
import * as skd_columns from '@sdk/sdk.columns';

@Component({
    selector: 'app-find-back',
    templateUrl: './find-back.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FindBackComponent),
            multi: true
        }
    ],
})
export class FindBackComponent implements OnInit {
    // ngModel Access
    _value: string;
    onChange: any = Function.prototype;
    onTouched: any = Function.prototype;
    @Input()
    showKey: string;
    @Input()
    valueKey: string;
    @Input()
    showText: string;

    constructor(
        public sdk: SdkService,
        protected modalHelper: ModalHelper
    ) { }

    ngOnInit() {
    }
    search() {
        const me = this;
        me.modalHelper.static(FindTableComponent, {}, 800).subscribe((data) => {
            if (data) {
                this.nzValue = data[this.valueKey];
                this.showText = data[this.showKey];
            }
        });
    }

    get nzValue(): any {
        return this._value;
    }

    set nzValue(value: any) {
        if ((this._value === value) || (((this._value === undefined) || (this._value === null)) && ((value === undefined) ||
            (value === null)))) {
            return;
        }
        this._value = value;
        this.onChange(value);

    }

    writeValue(value: any): void {
        this._value = value;
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => {}): void {
        this.onTouched = fn;
    }


}
