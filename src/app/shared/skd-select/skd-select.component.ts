import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SdkRes } from '@sdk/sdk.util';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'app-skd-select',
    templateUrl: './skd-select.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SkdSelectComponent),
            multi: true
        }
    ],
})
export class SkdSelectComponent implements OnInit {

    _value: number;
    options;
    @Input() loadService: Observable<any>;
    @Input() key: string;
    @Input() name: string;
    onChange: any = Function.prototype;
    onTouched: any = Function.prototype;

    constructor() { }

    ngOnInit() {
        const me = this;
        this.loadService.subscribe((res: SdkRes) => {
            me.options = res.results;
        })
    }

    get nzValue(): number {
        return this._value;
    }
    set nzValue(value: number) {
        this._value = value;
        this.onChange(value);
    }

    writeValue(value: number) {
        this._value = value;
    }

    registerOnChange(fn: (_: number) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

}
