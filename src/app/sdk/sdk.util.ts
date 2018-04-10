import * as admins_enums from './sdk.admins_enum';
import * as users_enums from './sdk.users_enum';
import * as bcexs_enums from './sdk.bcexs_enum';
import { isDate } from 'util';
export const UINT_LIAT = ['uint16'];
export const FLOAT_LIST = ['double8_4', 'double16_6', 'double16_2', 'double24_8', 'double'];
export const STRING_LIST = ['string4', 'string8', 'string12', 'string16', 'string24', 'string32', 'string64', 'string512', 'jsonString', 'string'];
export const BYTE_LIST = ['byte24'];

export class FeildCheckError extends Error { }

export interface SdkRes {
    results: Array<object>;
    error: string;
    error_text: string;
}

export abstract class FeildCheck {

    public abstract fields_options: any;
    public abstract field_keys: string[];

    public static check_field_int(options: {}, key: string, val: number): void {
        const minval = parseInt(options['minval'], 10);
        const maxval = parseInt(options['maxval'], 10);

        if (!isNaN(minval) && val < minval) {
            throw (new FeildCheckError(_(`超出字段最小值[${key}][min=${minval}]`)));
        }

        if (!isNaN(maxval) && val < maxval) {
            throw (new FeildCheckError(_(`超出字段最大值[${key}][max=${maxval}]`)));
        }
    }

    public static check_field_float(options: {}, key: string, val: number): void {
        const minval = parseFloat(options['minval']);
        const maxval = parseFloat(options['maxval']);

        if (!isNaN(minval) && val < minval) {
            throw (new FeildCheckError(_(`超出字段最小值[${key}][min=${minval}]`)));
        }

        if (!isNaN(maxval) && val > maxval) {
            throw (new FeildCheckError(_(`超出字段最大值[${key}][max=${maxval}]`)));
        }
    }

    public static check_field_string(options: {}, key: string, val: string): void {
        const minlen = parseInt(options['minlen'], 10);
        const maxlen = parseInt(options['maxlen'], 10);

        if (!isNaN(minlen) && val.length < minlen) {
            throw (new FeildCheckError(_(`超出字段最小长度[${key}][min=${minlen}]`)));
        }

        if (!isNaN(maxlen) && val.length > maxlen) {
            throw (new FeildCheckError(_(`超出字段最大长度[${key}][max=${maxlen}]`)));
        }
    }

    public static check_field_bytes(options: {}, key: string, val: string): void {
        const minlen = parseInt(options['minlen'], 10);
        const maxlen = parseInt(options['maxlen'], 10);

        if (!isNaN(minlen) && val.length < minlen) {
            throw (new FeildCheckError(_(`超出字段最大长度[${key}][max=${maxlen}]`)));
        }

        if (!isNaN(maxlen) && val.length > maxlen) {
            throw (new FeildCheckError(_(`超出字段最大长度[${key}][max=${maxlen}]`)));
        }
    }

    public static check_field_datetime(options: {}, key: string, val: string): void {
        if (isDate(val)) {
            return;
        }
        const regix = new RegExp('^[0-9]{4}[0-9]{2}[0-9]{2}T[0-9]{2}[0-9]{2}[0-9]{2}$', 'g');
        if (!val.match(regix)) {
            throw (new FeildCheckError(_(`无效时间格式[${key}][YYYYmmDDTHHMMSS]`)));
        }
    }

    public static check_field_date(options: {}, key: string, val: string): void {
        if (isDate(val)) {
            return;
        }
        const regix = new RegExp('^[0-9]{4}[0-9]{2}[0-9]{2}$', 'g');
        if (!val.match(regix)) {
            throw (new FeildCheckError(_(`无效时间格式[${key}][YYYYmmDD]`)));
        }
    }

    public static check_field_enum(enum_name: string, key: string, val: string): void {
        let class_obj = null;
        try {
            // 存在同名枚举冲突
            class_obj = users_enums[enum_name];
        } catch (error) {
            throw (new FeildCheckError(_(`无效枚举名称[${enum_name}]`)));
        }

        if (class_obj === undefined) {
            try {
                class_obj = admins_enums[enum_name];
            } catch (error) {
                throw (new FeildCheckError(_(`无效枚举名称[${enum_name}]`)));
            }

            if (class_obj === undefined) {
                try {
                    class_obj = bcexs_enums[enum_name];
                } catch (error) {
                    throw (new FeildCheckError(_(`无效枚举名称[${enum_name}]`)));
                }
            }
        }

        const vals = Object.keys(class_obj).map(k => class_obj[k]);
        if (!(val in vals)) {
            throw (new FeildCheckError(_(`无效枚举值[${enum_name}][${key}][${val}]`)));
        }
    }

    public static check_field_int_list(options: {}, key: string, val: number[]): void {

    }

    public do_fields_check(): void {
        const fields_options = this.fields_options;
        const _this = this;
        Object.keys(fields_options).forEach(function (key) {
            const val = _this[key];
            const options = fields_options[key];
            if (val === undefined) {
                throw (new FeildCheckError(_(`options_error[${key}]`)));
            }
            if (STRING_LIST.indexOf(options['type']) > -1) {
                FeildCheck.check_field_string(options, key, val);
            } else if (options['type'] === 'bytes' || BYTE_LIST.indexOf(options['type']) > -1) {
                FeildCheck.check_field_bytes(options, key, val);
            } else if (options['type'] === 'int32' || options['type'] === 'int64' || UINT_LIAT.indexOf(options['type']) > -1) {
                FeildCheck.check_field_int(options, key, val);
            } else if (options['type'] === 'float' || options['type'] === 'double' || FLOAT_LIST.indexOf(options['type']) > -1) {
                FeildCheck.check_field_float(options, key, val);
            } else if (options['type'] === 'datetime') {
                FeildCheck.check_field_datetime(options, key, val);
            } else if (options['type'] === 'date') {
                FeildCheck.check_field_date(options, key, val);
            } else if (options['type'] === 'list_int32') {
                FeildCheck.check_field_int_list(options, key, val);
            } else if (options['type'].length > 4 && (
                options['type'].slice(0, 4) === 'Enum' ||
                options['type'].slice(-4) === 'Enum')) {
                FeildCheck.check_field_enum(options['type'], key, val);
            } else {
                throw (new FeildCheckError(_('枚举名称定义格式不符')));
            }
        });
    }

    public field2dict(): {} {
        const _this = this;
        const result = {};
        this.field_keys.forEach(function (key) {
            result[key] = _this[key];
        });
        return result;
    }

    public is_fields_vaild(): boolean {
        const _this = this;
        try {
            _this.fields_check();
            return true;
        } catch (error) {
            return false;
        }
    }

    public fields_check(): void {
        this.do_fields_check();
    }

}

export class QueryOp {
    static op_eq = '$eq';
    static op_like = '$like';
    static op_in = '$in';
    static op_nin = '$nin';
    static op_gt = '$gt';
    static op_gte = '$gte';
    static op_lt = '$lt';
    static op_lte = '$lte';
    static op_ne = '$ne';
}

export class QueryParam {
    op_eq = '$eq';
    op_like = '$like';
    op_in = '$in';
    op_nin = '$nin';
    op_gt = '$gt';
    op_gte = '$gte';
    op_lt = '$lt';
    op_lte = '$lte';
    op_ne = '$ne';
    PageIndex = 1;
    pageSize = 10;
    sort = '';
    key: string;
    value: string;
    op: string;
    constructor(key?: string, value?: string, op?: string) {
        this.key = key;
        this.value = value;
        this.op = op;
    }

    fields_check(): void {
    }

    parse() {
        const parames = { 'page': [this.PageIndex, this.pageSize] };
        if (this.sort !== '') {
            parames['sort'] = this.sort;
        }
        parames['where'] = parseQueryParam([this]);
    }
}

export function parseQueryParam(queryParam: Array<QueryParam>): any {
    const where = {};
    for (const query of queryParam) {
        const qv = {};
        qv[query.op] = query.value;
        where[query.key] = qv;
    }
    return where;
}

export function _(val: string): string {
    return val;
}


export class CsvParam {
    csvname: string;
    csvdesc: string;
    sops: Array<any>;
}

export class CsvModelPost extends FeildCheck {
    where: any;
    csv: CsvParam;
    public fields_options = {};
    public field_keys: string[] = ['where', 'csv'];
    constructor() {
        super();
        this.csv = new CsvParam();
    }
}