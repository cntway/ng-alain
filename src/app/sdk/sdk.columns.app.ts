export const pair_property_group_map_get_columns = [
    { index: 'propertygroupid', text: '属性组', width: "100px" },
    { index: 'pairid', text: '交易对id', disabled: true, width: "100px" },
    { index: 'propertyid', text: '属性id', width: "100px" },
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