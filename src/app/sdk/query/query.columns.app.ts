import * as admins_enums from './query.admins_enum';
import * as users_enums from './query.users_enum';
import * as bcexs_enums from './query.bcexs_enum';

export const sys_exchmoney_query_get_columns = [
    { index: 'balance', text: '交易所余额', dataType: 'float' },
    { index: 'totalfee', text: '交易所收取的总手续费', dataType: 'float' },
    { index: 'dayfee', text: '交易所当天收取的手续费', dataType: 'float' },
    { index: 'totalrefill', text: '入金总数量', dataType: 'float' },
    { index: 'dayrefill', text: '当天入金总数量', dataType: 'float' },
    { index: 'totalwithdraw', text: '出金总数量', dataType: 'float' },
    { index: 'daywithdraw', text: '当天出入金总数量', dataType: 'float' },
];


export const report_csv_download_get_columns = [
    { index: 'task_id', text: '任务Id', dataType: 'string', width: "200px" },
    { index: 'csvname', text: '名称', dataType: 'string', width: "200px" },
    { index: 'csvdesc', text: '备注', dataType: 'string', width: "200px" },
    { index: 'task_status', text: '状态', dataType: 'string', width: "200px" },
];