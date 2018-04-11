import * as admins_enums from './query.admins_enum';
import * as users_enums from './query.users_enum';
import * as bcexs_enums from './query.bcexs_enum';


export const sys_exchmoney_query_get_columns = [
    { index: 'balance', text: '该币种在交易所余额', dataType: 'float' },
    { index: 'totalfee', text: '交易所收取的总手续费', dataType: 'float' },
    { index: 'dayfee', text: '交易所当天收取的手续费', dataType: 'float' },
    { index: 'totalrefill', text: '该币种入金总数量', dataType: 'float' },
    { index: 'dayrefill', text: '该币种当天入金总数量', dataType: 'float' },
    { index: 'totalwithdraw', text: '该币种出金总数量', dataType: 'float' },
    { index: 'daywithdraw', text: '该币种当出入金总数量', dataType: 'float' },
];

export const sys_exchmoney_sum_query_get_columns = [
    { index: 'balance', text: '该币种在交易所余额', dataType: 'float' },
    { index: 'totalfee', text: '交易所收取的总手续费', dataType: 'float' },
    { index: 'dayfee', text: '交易所当天收取的手续费', dataType: 'float' },
    { index: 'totalrefill', text: '该币种入金总数量', dataType: 'float' },
    { index: 'dayrefill', text: '该币种当天入金总数量', dataType: 'float' },
    { index: 'totalwithdraw', text: '该币种出金总数量', dataType: 'float' },
    { index: 'daywithdraw', text: '该币种当出入金总数量', dataType: 'float' },
];

export const sys_exchmoney_log_query_get_columns = [
    { index: 'coincode', text: '币代码', dataType: 'string' },
    { index: 'umtype', text: '资金变动类型', dataType: 'enum', enum: bcexs_enums.UMTypeEnumTranslate },
    { index: 'umchange', text: '变动额度', dataType: 'float' },
    { index: 'umbefore', text: '变动前额度', dataType: 'float' },
    { index: 'umafter', text: '变动后额度', dataType: 'float' },
    { index: 'note', text: '备注', dataType: 'string' },
];

export const sys_exchmoney_log_sum_query_get_columns = [
    { index: 'coincode', text: '币代码', dataType: 'string' },
    { index: 'umtype', text: '资金变动类型', dataType: 'enum', enum: bcexs_enums.UMTypeEnumTranslate },
    { index: 'count', text: '记录数量', dataType: 'int' },
    { index: 'umchange', text: '变动额度', dataType: 'float' },
];

export const user_money_query_get_columns = [
    { index: 'accid', text: '资金账户id', dataType: 'int' },
    { index: 'coincode', text: '币代码', dataType: 'string' },
    { index: 'balance', text: '余额', dataType: 'float' },
    { index: 'frozen', text: '冻结额度', dataType: 'float' },
    { index: 'available', text: '可用额度', dataType: 'float' },
    { index: 'userid', text: '用户id', dataType: 'int' },
    { index: 'marketid', text: '市场id', dataType: 'int' },
    { index: 'username', text: '用户名称', dataType: 'string' },
    { index: 'logincode', text: '登陆账号', dataType: 'string' },
];

export const user_money_sum_query_get_columns = [
    { index: 'count', text: '记录数量', dataType: 'int' },
    { index: 'balance', text: '余额', dataType: 'float' },
    { index: 'frozen', text: '冻结额度', dataType: 'float' },
    { index: 'available', text: '可用额度', dataType: 'float' },
];

export const trade_order_query_get_columns = [
    { index: 'accid', text: '资金id', dataType: 'int' },
    { index: 'bscode', text: '买卖方向', dataType: 'enum', enum: bcexs_enums.BsCodeEnumTranslate },
    { index: 'pairid', text: '交易对id', dataType: 'int' },
    { index: 'ordercode', text: '订单id', dataType: 'string' },
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
    { index: 'userid', text: '用户id', dataType: 'int' },
    { index: 'marketid', text: '市场id', dataType: 'int' },
    { index: 'tradingday', text: '交易日', dataType: 'datetime' },
    { index: 'username', text: '用户姓名', dataType: 'string' },
    { index: 'logincode', text: '登陆账号', dataType: 'string' },
];

export const trade_order_sum_query_get_columns = [
    { index: 'accid', text: '资金id', dataType: 'int' },
    { index: 'bscode', text: '买卖方向', dataType: 'enum', enum: bcexs_enums.BsCodeEnumTranslate },
    { index: 'pairid', text: '交易对id', dataType: 'int' },
    { index: 'orderprice', text: '委托价格(均价)', dataType: 'float' },
    { index: 'orderquantity', text: '委托数量', dataType: 'float' },
    { index: 'ordertype', text: '委托类型', dataType: 'enum', enum: bcexs_enums.OrderTypeEnumTranslate },
    { index: 'completequantity', text: '已成交数量', dataType: 'float' },
    { index: 'fee', text: '手续费', dataType: 'float' },
    { index: 'usedcoincode', text: '占用币种', dataType: 'string' },
    { index: 'usedamount', text: '占用金额', dataType: 'float' },
    { index: 'userid', text: '用户id', dataType: 'int' },
    { index: 'marketid', text: '市场id', dataType: 'int' },
    { index: 'tradingday', text: '交易日', dataType: 'datetime' },
    { index: 'count', text: '记录数量', dataType: 'int' },
];

export const trade_order_log_query_get_columns = [
    { index: 'serialid', text: '流水号', dataType: 'int' },
    { index: 'accid', text: '资金账号', dataType: 'int' },
    { index: 'bscode', text: '买卖方向', dataType: 'enum', enum: bcexs_enums.BsCodeEnumTranslate },
    { index: 'pairid', text: '交易对id', dataType: 'int' },
    { index: 'ordercode', text: '订单id', dataType: 'string' },
    { index: 'orderprice', text: '委托价格', dataType: 'float' },
    { index: 'orderquantity', text: '委托数量', dataType: 'float' },
    { index: 'ordertype', text: '委托类型', dataType: 'enum', enum: bcexs_enums.OrderTypeEnumTranslate },
    { index: 'ordertime', text: '委托时间', dataType: 'datetime' },
    { index: 'completequantity', text: '已成交数量', dataType: 'float' },
    { index: 'userid', text: '用户id', dataType: 'int' },
    { index: 'marketid', text: '市场id', dataType: 'int' },
    { index: 'optype', text: '操作类型', dataType: 'enum', enum: bcexs_enums.OrderOpEnumTranslate },
    { index: 'cdt', text: '创建时间', dataType: 'datetime' },
    { index: 'username', text: '用户姓名', dataType: 'string' },
    { index: 'logincode', text: '登陆账号', dataType: 'string' },
    { index: 'pairname', text: '交易对名称', dataType: 'string' },
];

export const trade_order_log_sum_query_get_columns = [
    { index: 'count', text: '记录数量', dataType: 'int' },
];

export const user_bonus_query_get_columns = [
    { index: 'cdt', text: '创建时间', dataType: 'datetime' },
    { index: 'udt', text: '最新更新时间', dataType: 'datetime' },
    { index: 'bonus', text: '积分', dataType: 'int' },
    { index: 'userid', text: '用户id', dataType: 'int' },
];

export const user_bonus_sum_query_get_columns = [
    { index: 'bonus', text: '积分', dataType: 'int' },
    { index: 'userid', text: '用户id', dataType: 'int' },
];

export const user_bonus_log_query_get_columns = [
    { index: 'userid', text: '用户id', dataType: 'int' },
    { index: 'deltabonus', text: '变动积分', dataType: 'int' },
    { index: 'bonusbefore', text: '变动前积分', dataType: 'int' },
    { index: 'bonusafter', text: '变动后积分', dataType: 'int' },
    { index: 'bonustype', text: '积分类型', dataType: 'enum', enum: bcexs_enums.BonusEnumTranslate },
    { index: 'cdt', text: '创建时间', dataType: 'datetime' },
];

export const user_bonus_log_sum_query_get_columns = [
    { index: 'userid', text: '用户id', dataType: 'int' },
    { index: 'deltabonus', text: '变动积分', dataType: 'int' },
    { index: 'bonustype', text: '积分类型', dataType: 'enum', enum: bcexs_enums.BonusEnumTranslate },
];

export const report_csv_download_get_columns = [
];

export const report_csv_get_columns = [
];

