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

export const trade_order_query_get_columns = [
    { index: 'logincode', text: '登陆账号', dataType: 'string' },
    { index: 'username', text: '用户姓名', dataType: 'string' },
    { index: 'accid', text: '资金id', dataType: 'int', disabled: true },
    { index: 'bscode', text: '买卖方向', dataType: 'enum', enum: bcexs_enums.BsCodeEnumTranslate },
    { index: 'pairid', text: '交易对id', dataType: 'int', disabled: true },
    { index: 'ordercode', text: '订单id', dataType: 'string', disabled: true },
    { index: 'orderprice', text: '委托价格', dataType: 'float' },
    { index: 'orderquantity', text: '委托数量', dataType: 'float' },
    { index: 'ordertype', text: '委托类型', dataType: 'enum', enum: bcexs_enums.OrderTypeEnumTranslate },
    { index: 'ordertime', text: '委托时间', dataType: 'datetime' },
    { index: 'orderstatus', text: '委托状态', dataType: 'enum', enum: bcexs_enums.OrderStatusEnumTranslate },
    { index: 'completequantity', text: '已成交数量', dataType: 'float' },
    { index: 'fee', text: '手续费', dataType: 'float' },
    { index: 'dealtime', text: '成交时间', dataType: 'datetime' },
    { index: 'usedcoincode', text: '占用币种', dataType: 'string' },
    { index: 'usedamount', text: '占用金额', dataType: 'float' },
    { index: 'userid', text: '用户id', dataType: 'int', disabled: true },
    { index: 'marketid', text: '市场id', dataType: 'int', disabled: true },
    { index: 'tradingday', text: '交易日', dataType: 'datetime', disabled: true },
];

export const user_money_query_get_columns = [
    { index: 'username', text: '用户名称', dataType: 'string' },
    { index: 'logincode', text: '登陆账号', dataType: 'string' },
    { index: 'accid', text: '资金账户id', dataType: 'int', disabled: true },
    { index: 'coincode', text: '币代码', dataType: 'string' },
    { index: 'balance', text: '余额', dataType: 'float' },
    { index: 'frozen', text: '冻结额度', dataType: 'float' },
    { index: 'available', text: '可用额度', dataType: 'float' },
    { index: 'userid', text: '用户id', dataType: 'int', disabled: true },
    { index: 'marketid', text: '市场id', dataType: 'int', disabled: true },

];

export const trade_order_log_query_get_columns = [
    { index: 'logincode', text: '登陆账号', dataType: 'string' },
    { index: 'username', text: '用户姓名', dataType: 'string' },
    { index: 'pairname', text: '交易对名称', dataType: 'string' },
    { index: 'serialid', text: '流水号', dataType: 'int' },
    { index: 'accid', text: '资金账号', dataType: 'int' , disabled: true },
    { index: 'bscode', text: '买卖方向', dataType: 'enum', enum: bcexs_enums.BsCodeEnumTranslate },
    { index: 'pairid', text: '交易对id', dataType: 'int' , disabled: true},
    { index: 'ordercode', text: '订单id', dataType: 'string' },
    { index: 'orderprice', text: '委托价格', dataType: 'float' },
    { index: 'orderquantity', text: '委托数量', dataType: 'float' },
    { index: 'ordertype', text: '委托类型', dataType: 'enum', enum: bcexs_enums.OrderTypeEnumTranslate },
    { index: 'ordertime', text: '委托时间', dataType: 'datetime' },
    { index: 'completequantity', text: '已成交数量', dataType: 'float' , disabled: true},
    { index: 'userid', text: '用户id', dataType: 'int' , disabled: true},
    { index: 'marketid', text: '市场id', dataType: 'int' , disabled: true},
    { index: 'optype', text: '操作类型', dataType: 'enum', enum: bcexs_enums.OrderOpEnumTranslate },
    { index: 'cdt', text: '创建时间', dataType: 'datetime' },

];
