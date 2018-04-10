import * as admins_enums from './sdk.admins_enum';
import * as users_enums from './sdk.users_enum';
import * as bcexs_enums from './sdk.bcexs_enum';

export const pair_property_group_map_get_columns = [
    { index: 'propertygroupid', text: '属性组', width: "100px" },
    { index: 'propertyname', text: '属性名称', width: "100px" },
    { index: 'propertyid', text: '属性id', width: "100px", disabled: true, },
    { index: 'pairid', text: '交易对id', disabled: true, width: "100px" },
    { index: 'marketid', text: '市场id', disabled: true, width: "100px" },

];
export const pair_property_get_columns = [
    { index: 'propertyid', text: '属性id', dataType: 'int', disabled: true },
    { index: 'pairid', text: '交易对id', dataType: 'int' },
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
