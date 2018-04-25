import * as admins_enums from './sdk.admins_enum';
import * as users_enums from './sdk.users_enum';
import * as bcexs_enums from './sdk.bcexs_enum';


export const user_users_get_columns = [
    { index: 'userid', text: '用户id', dataType: 'int', disabled: true },
    { index: 'logincode', text: '登录账号', dataType: 'string' },
    { index: 'useracctype', text: '账号类别', dataType: 'enum', enum: users_enums.EnumUserAccTypeTranslate },
    { index: 'username', text: '用户姓名', dataType: 'string' },
    { index: 'nikename', text: '用户昵称', dataType: 'string', disabled: true },
    { index: 'country', text: '国籍', dataType: 'string' },
    { index: 'telcode', text: '区号', dataType: 'string', disabled: true },
    { index: 'phone', text: '联系手机', dataType: 'string' },
    { index: 'email', text: '电子邮件', dataType: 'string' },
    { index: 'idtype', text: '证件类型', dataType: 'enum', enum: users_enums.EnumIdTypeTranslate },
    { index: 'idcard', text: '证件号码', dataType: 'string' },
    { index: 'idcardvaild', text: '证件有效期', dataType: 'date' },
    { index: 'createsorce', text: '开户来源', dataType: 'enum', enum: users_enums.EnumCreateSourceTypeTranslate },
    { index: 'lastresetpwdtime', text: '最后修改密码时间', dataType: 'datetime', disabled: true },
    { index: 'lastcreatetime', text: '开户时间', dataType: 'datetime' },
    { index: 'jsoncache', text: '附属字段', dataType: 'string', disabled: true },
];


export const pair_property_group_map_get_columns = [
    { index: 'propertygroupid', text: '属性组id', dataType: 'int', disabled: true },
    { index: 'pairid', text: '交易对id', dataType: 'int', disabled: true },
    { index: 'propertyid', text: '属性id', dataType: 'int', disabled: true },
    { index: 'marketid', text: '市场id', dataType: 'int', disabled: true },
    { index: 'groupname', text: '属性组名称', dataType: 'string' },
    { index: 'propertyname', text: '属性名称', dataType: 'string' },
    { index: 'pairname', text: '交易对名称', dataType: 'string' },
];

export const pair_property_get_columns = [
    { index: 'propertyid', text: '属性id', dataType: 'int', disabled: true },
    { index: 'pairid', text: '交易对id', dataType: 'int', disabled: true },
    { index: 'propertyname', text: '属性名称', dataType: 'string' },
    { index: 'pairname', text: '交易对名称', dataType: 'string' },
    { index: 'takerfeeratio', text: '主动吃单手续费', dataType: 'float' },
    { index: 'makerfeeratio', text: '挂单成交手续费', dataType: 'float' },
    { index: 'wdfeeratio', text: '提现手续费', dataType: 'float' },
    { index: 'referrfeeratio', text: '推荐费', dataType: 'float' },
    { index: 'quantitylimitonce', text: '单次下单额度限制', dataType: 'float' },
    { index: 'quantitylimitday', text: '全天下单额度限制', dataType: 'float' },
    { index: 'wdtimeslimit', text: '今日提现次数限制', dataType: 'int' },
    { index: 'wdamountlimit', text: '今日提现额度限制', dataType: 'float' },
];

export const bonus_rule_get_columns = [
    { index: 'ruleid', text: '规则id', dataType: 'int' },
    { index: 'bonus', text: '积分', dataType: 'int' },
    { index: 'bonustype', text: '积分类型', dataType: 'enum', enum: bcexs_enums.BonusEnumTranslate },
    { index: 'lower', text: '积分范围最高', dataType: 'int' },
    { index: 'upper', text: '积分范围最低', dataType: 'int' },
    { index: 'pairid', text: '交易对id', dataType: 'int', disabled: true },

];

export const coin_pair_get_columns = [
    { index: 'pairid', text: '交易对id', dataType: 'int' },
    { index: 'paircode', text: '交易对代码', dataType: 'string' },
    { index: 'pairname', text: '交易对名称', dataType: 'string' },
    { index: 'symbolcode', text: '交易对标的币', dataType: 'string' },
    { index: 'currencycode', text: '交易对结算币', dataType: 'string' },
    { index: 'pairstatus', text: '交易对状态', dataType: 'enum', enum: bcexs_enums.PairStatusEnumTranslate },
    { index: 'pricescale', text: '报价小数位', dataType: 'int' },
    { index: 'amountscale', text: '金额小数位', dataType: 'int' },
    { index: 'marketmode', text: '市场模式', dataType: 'enum', enum: bcexs_enums.MarketModeEnumTranslate },
    { index: 'marketid', text: '市场id', dataType: 'int', disabled: true },
    { index: 'cdt', text: '创建时间', dataType: 'datetime' },
];

export const coin_currencys_get_columns = [
    { index: 'coincode', text: '币代码', dataType: 'string' },
    { index: 'marketid', text: '市场id', dataType: 'int', disabled: true },
    { index: 'marketname', text: '市场名称', dataType: 'string' },
    { index: 'cdt', text: '创建时间', dataType: 'datetime' },

];

export const pair_property_group_get_columns = [
    { index: 'propertygroupid', text: '属性组id', dataType: 'int', disabled: true },
    { index: 'groupname', text: '属性组名称', dataType: 'string', width: "200px" },
    { index: 'note', text: '备注', dataType: 'string', width: "200px" },

];

export const bcex_market_get_columns = [
    { index: 'marketid', text: '交易市场id', dataType: 'int', disabled: true },
    { index: 'marketname', text: '交易市场名称', dataType: 'string' },
    { index: 'trademodel', text: '交易模式', dataType: 'enum', enum: bcexs_enums.MarketModeEnumTranslate },
    { index: 'risktype', text: '风险率计算公式', dataType: 'enum', enum: bcexs_enums.RiskEnumTranslate },
    { index: 'settlementtype', text: '结算负债模式', dataType: 'enum', enum: bcexs_enums.SettlementEnumTranslate },
    { index: 'tradestatus', text: '交易状态', dataType: 'enum', enum: bcexs_enums.TradeStatusEnumTranslate },
    { index: 'opofocmarket', text: '开休市模式', dataType: 'enum', enum: bcexs_enums.OperatorEnumTranslate },
    { index: 'opofsettlement', text: '结算模式', dataType: 'enum', enum: bcexs_enums.OperatorEnumTranslate },
];

export const muser_users_get_columns = [
    { index: 'userid', text: '用户id', dataType: 'int' , disabled: true },
    { index: 'logincode', text: '登陆账号', dataType: 'string' },
    { index: 'roleid', text: '角色id', dataType: 'int' , disabled: true },
    { index: 'userstatus', text: '用户状态', dataType: 'enum', enum: admins_enums.EnumUserStatusTranslate },
    { index: 'username', text: '用户姓名', dataType: 'string' },
    { index: 'nikename', text: '昵称', dataType: 'string' , disabled: true },
    { index: 'phone', text: '手机号码', dataType: 'string' },
    { index: 'email', text: '电子邮件', dataType: 'string' , disabled: true },
    { index: 'idtype', text: '证件类型', dataType: 'enum', enum: admins_enums.EnumIdTypeTranslate },
    { index: 'idcard', text: '证件号', dataType: 'string' },
    { index: 'idcardvaild', text: '证件有效期', dataType: 'date' , disabled: true },
];