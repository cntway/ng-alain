import * as admins_enums from './sdk.admins_enum';
import * as users_enums from './sdk.users_enum';
import * as bcexs_enums from './sdk.bcexs_enum';
import { FeildCheck } from './sdk.util';

export function _(val: string): string {
    return val;
}



export class UserHeartbeatPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserLoginPost extends FeildCheck {

    
    public logincode: string;  // 登录账号
    
    public password: string;  // 登录密码
    
    public clientver: string;  // 客户端版本
    
    public fields_options = { 
        'logincode': { 
            'maxlen': '32',
            'minlen': '6',
            'maxval': 'none',
            'minval': 'none',
            'type': 'string',
            'typeValue': 'string'
        },
        'password': { 
            'maxlen': '32',
            'minlen': '6',
            'maxval': 'none',
            'minval': 'none',
            'type': 'string',
            'typeValue': 'string'
        },
        'clientver': { 
            'maxlen': '16',
            'minlen': '6',
            'maxval': 'none',
            'minval': 'none',
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'logincode',
        'password',
        'clientver'
    ];
}


export class SysMenuDelete extends FeildCheck {

    
    public menuid: number;  // 菜单id
    
    public fields_options = { 
        'menuid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'menuid'
    ];
}


export class SysMenuDetailGet extends FeildCheck {

    
    public menuid: number;  // 菜单id
    
    public fields_options = { 
        'menuid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'menuid'
    ];
}


export class SysMenuGet extends FeildCheck {

    
    public menuid: number;  // 菜单id
    
    public fields_options = { 
        'menuid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'menuid'
    ];
}


export class SysMenuPost extends FeildCheck {

    
    public commituri: string;  // 提交接口地址
    
    public remark: string;  // 备忘
    
    public sortid: number;  // 显示顺序
    
    public productid: number;  // 产品id
    
    public isshow: admins_enums.EnumIsStopType;  // 是否显示
    
    public apikey: string;  // 接口名称
    
    public parentid: number;  // 父菜单id
    
    public funckey: string;  // 前端用配置字段
    
    public pagehref: string;  // 页面地址
    
    public isstop: admins_enums.EnumIsStopType;  // 是否停用
    
    public menuname: string;  // 菜单名称
    
    public fields_options = { 
        'commituri': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'remark': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'sortid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'productid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'isshow': { 
            'maxlen': 'none',
            'type': 'EnumIsStopType',
            'typeValue': 'admins_enums.EnumIsStopType'
        },
        'apikey': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'parentid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'funckey': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'pagehref': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'isstop': { 
            'maxlen': 'none',
            'type': 'EnumIsStopType',
            'typeValue': 'admins_enums.EnumIsStopType'
        },
        'menuname': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'commituri',
        'remark',
        'sortid',
        'productid',
        'isshow',
        'apikey',
        'parentid',
        'funckey',
        'pagehref',
        'isstop',
        'menuname'
    ];
}


export class SysMenuPut extends FeildCheck {

    
    public commituri: string;  // 提交接口地址
    
    public remark: string;  // 备忘
    
    public sortid: number;  // 显示顺序
    
    public productid: number;  // 产品id
    
    public menuid: number;  // 菜单id
    
    public isshow: admins_enums.EnumIsStopType;  // 是否显示
    
    public apikey: string;  // 接口名称
    
    public parentids: string;  // 父菜单结构
    
    public parentid: number;  // 父菜单id
    
    public funckey: string;  // 前端用配置字段
    
    public pagehref: string;  // 页面地址
    
    public isstop: admins_enums.EnumIsStopType;  // 是否停用
    
    public menuname: string;  // 菜单名称
    
    public fields_options = { 
        'commituri': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'remark': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'sortid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'productid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'menuid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'isshow': { 
            'maxlen': 'none',
            'type': 'EnumIsStopType',
            'typeValue': 'admins_enums.EnumIsStopType'
        },
        'apikey': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'parentids': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'parentid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'funckey': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'pagehref': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'isstop': { 
            'maxlen': 'none',
            'type': 'EnumIsStopType',
            'typeValue': 'admins_enums.EnumIsStopType'
        },
        'menuname': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'commituri',
        'remark',
        'sortid',
        'productid',
        'menuid',
        'isshow',
        'apikey',
        'parentids',
        'parentid',
        'funckey',
        'pagehref',
        'isstop',
        'menuname'
    ];
}


export class SysRoleDelete extends FeildCheck {

    
    public roleid: number;  // 角色id
    
    public fields_options = { 
        'roleid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'roleid'
    ];
}


export class SysRoleMenuGet extends FeildCheck {

    
    public roleid: number;  // 角色id
    
    public fields_options = { 
        'roleid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'roleid'
    ];
}


export class SysRoleGet extends FeildCheck {

    
    public roleid: number;  // 角色id
    
    public fields_options = { 
        'roleid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'roleid'
    ];
}


export class SysRolePost extends FeildCheck {

    
    public roletype: admins_enums.EnumUserType;  // 角色类型
    
    public rolename: string;  // 角色名称
    
    public fields_options = { 
        'roletype': { 
            'maxlen': 'none',
            'type': 'EnumUserType',
            'typeValue': 'admins_enums.EnumUserType'
        },
        'rolename': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'roletype',
        'rolename'
    ];
}


export class SysRoleMenuPut extends FeildCheck {

    
    public roleid: number;  // 角色id
    
    public menuids: number[];  // 菜单id列表
    
    public fields_options = { 
        'roleid': { 
            'maxlen': 'none',
            'minlen': 'none',
            'maxval': 'none',
            'minval': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'menuids': { 
            'maxlen': 'none',
            'minlen': 'none',
            'maxval': 'none',
            'minval': 'none',
            'type': 'list_int32',
            'typeValue': 'number[]'
        },
    };

    public field_keys: string[] = [
        'roleid',
        'menuids'
    ];
}


export class SysRolePut extends FeildCheck {

    
    public roleid: number;  // 角色id
    
    public rolename: string;  // 角色名称
    
    public fields_options = { 
        'roleid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'rolename': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'roleid',
        'rolename'
    ];
}


export class MuserUsersChangepwdPut extends FeildCheck {

    
    public src_userpwd: string;  // 用户密码
    
    public new_userpwd: string;  // 用户密码
    
    public fields_options = { 
        'src_userpwd': { 
            'maxlen': '24',
            'type': 'byte24',
            'typeValue': 'string'
        },
        'new_userpwd': { 
            'maxlen': '24',
            'type': 'byte24',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'src_userpwd',
        'new_userpwd'
    ];
}


export class MuserUsersDelete extends FeildCheck {

    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'userid'
    ];
}


export class MuserUsersGet extends FeildCheck {

    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'userid'
    ];
}


export class MuserUsersPost extends FeildCheck {

    
    public userstatus: admins_enums.EnumUserStatus;  // 用户状态
    
    public userpwd: string;  // 用户密码
    
    public idtype: admins_enums.EnumIdType;  // 证件类型
    
    public username: string;  // 用户姓名
    
    public idcardvaild: Date;  // 证件有效期
    
    public logincode: string;  // 登录账号
    
    public nikename: string;  // 用户昵称
    
    public phone: string;  // 手机号码
    
    public idcard: string;  // 证件号码
    
    public email: string;  // 电子邮箱
    
    public fields_options = { 
        'userstatus': { 
            'maxlen': 'none',
            'type': 'EnumUserStatus',
            'typeValue': 'admins_enums.EnumUserStatus'
        },
        'userpwd': { 
            'maxlen': '24',
            'type': 'byte24',
            'typeValue': 'string'
        },
        'idtype': { 
            'maxlen': 'none',
            'type': 'EnumIdType',
            'typeValue': 'admins_enums.EnumIdType'
        },
        'username': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idcardvaild': { 
            'maxlen': 'none',
            'type': 'date',
            'typeValue': 'Date'
        },
        'logincode': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'nikename': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'phone': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idcard': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'email': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'userstatus',
        'userpwd',
        'idtype',
        'username',
        'idcardvaild',
        'logincode',
        'nikename',
        'phone',
        'idcard',
        'email'
    ];
}


export class MuserUsersResetpwdPut extends FeildCheck {

    
    public userid: number;  // 用户id
    
    public userpwd: string;  // 用户密码
    
    public fields_options = { 
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'userpwd': { 
            'maxlen': '24',
            'type': 'byte24',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'userid',
        'userpwd'
    ];
}


export class MuserUsersPut extends FeildCheck {

    
    public nikename: string;  // 用户昵称
    
    public idtype: admins_enums.EnumIdType;  // 证件类型
    
    public phone: string;  // 手机号码
    
    public email: string;  // 电子邮箱
    
    public userid: number;  // 用户id
    
    public username: string;  // 用户姓名
    
    public idcard: string;  // 证件号码
    
    public idcardvaild: Date;  // 证件有效期
    
    public fields_options = { 
        'nikename': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idtype': { 
            'maxlen': 'none',
            'type': 'EnumIdType',
            'typeValue': 'admins_enums.EnumIdType'
        },
        'phone': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'email': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'username': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idcard': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idcardvaild': { 
            'maxlen': 'none',
            'type': 'date',
            'typeValue': 'Date'
        },
    };

    public field_keys: string[] = [
        'nikename',
        'idtype',
        'phone',
        'email',
        'userid',
        'username',
        'idcard',
        'idcardvaild'
    ];
}


export class MuserParamesDelete extends FeildCheck {

    
    public paramsname: string;  // 配置名称
    
    public fields_options = { 
        'paramsname': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'paramsname'
    ];
}


export class MuserParamesGet extends FeildCheck {

    
    public paramsname: string;  // 配置名称
    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'paramsname': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'paramsname',
        'userid'
    ];
}


export class MuserParamesPut extends FeildCheck {

    
    public paramsvalue: string;  // 配置值
    
    public paramsname: string;  // 配置名称
    
    public paramssection: string;  // 配置段
    
    public fields_options = { 
        'paramsvalue': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'paramsname': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'paramssection': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'paramsvalue',
        'paramsname',
        'paramssection'
    ];
}


export class BonusRuleDelete extends FeildCheck {

    
    public ruleid: number;  // 规则id
    
    public fields_options = { 
        'ruleid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'ruleid'
    ];
}


export class BonusRuleGet extends FeildCheck {

    
    public ruleid: number;  // 规则id
    
    public fields_options = { 
        'ruleid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'ruleid'
    ];
}


export class BonusRulePost extends FeildCheck {

    
    public bonustype: bcexs_enums.BonusEnum;  // 积分类型
    
    public bonus: number;  // 积分
    
    public upper: number;  // 积分范围H
    
    public lower: number;  // 积分范围L
    
    public pairid: number;  // 交易对id
    
    public fields_options = { 
        'bonustype': { 
            'type': 'BonusEnum',
            'typeValue': 'bcexs_enums.BonusEnum'
        },
        'bonus': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'upper': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'lower': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'pairid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'bonustype',
        'bonus',
        'upper',
        'lower',
        'pairid'
    ];
}


export class BonusVipPrivilegeDelete extends FeildCheck {

    
    public vipclass: bcexs_enums.VipEnum;  // vip等级
    
    public fields_options = { 
        'vipclass': { 
            'type': 'VipEnum',
            'typeValue': 'bcexs_enums.VipEnum'
        },
    };

    public field_keys: string[] = [
        'vipclass'
    ];
}


export class BonusVipPrivilegeGet extends FeildCheck {

    
    public ruleid: number;  // 规则id
    
    public fields_options = { 
        'ruleid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'ruleid'
    ];
}


export class BonusVipPrivilegePost extends FeildCheck {

    
    public takerdiscount: number;  // taker折扣
    
    public wdtimesmulti: number;  // 提现次数倍数
    
    public makerdiscount: number;  // maker折扣
    
    public wdamountmulti: number;  // 提现额度倍数
    
    public wddiscount: number;  // 提现折扣
    
    public vipclass: bcexs_enums.VipEnum;  // vip等级
    
    public fields_options = { 
        'takerdiscount': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'wdtimesmulti': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'makerdiscount': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'wdamountmulti': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'wddiscount': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'vipclass': { 
            'type': 'VipEnum',
            'typeValue': 'bcexs_enums.VipEnum'
        },
    };

    public field_keys: string[] = [
        'takerdiscount',
        'wdtimesmulti',
        'makerdiscount',
        'wdamountmulti',
        'wddiscount',
        'vipclass'
    ];
}


export class BonusVipPrivilegePut extends FeildCheck {

    
    public takerdiscount: number;  // taker折扣
    
    public wdtimesmulti: number;  // 提现次数倍数
    
    public makerdiscount: number;  // maker折扣
    
    public wdamountmulti: number;  // 提现额度倍数
    
    public wddiscount: number;  // 提现折扣
    
    public vipclass: bcexs_enums.VipEnum;  // vip等级
    
    public fields_options = { 
        'takerdiscount': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'wdtimesmulti': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'makerdiscount': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'wdamountmulti': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'wddiscount': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'vipclass': { 
            'type': 'VipEnum',
            'typeValue': 'bcexs_enums.VipEnum'
        },
    };

    public field_keys: string[] = [
        'takerdiscount',
        'wdtimesmulti',
        'makerdiscount',
        'wdamountmulti',
        'wddiscount',
        'vipclass'
    ];
}


export class BonusVipRuleDelete extends FeildCheck {

    
    public ruleid: number;  // 规则id
    
    public fields_options = { 
        'ruleid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'ruleid'
    ];
}


export class BonusVipRuleGet extends FeildCheck {

    
    public ruleid: number;  // 规则id
    
    public fields_options = { 
        'ruleid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'ruleid'
    ];
}


export class BonusVipRulePost extends FeildCheck {

    
    public vipclass: bcexs_enums.VipEnum;  // vip等级
    
    public bonusupper: number;  // 等级积分最高
    
    public bonuslower: number;  // 等级积分最低
    
    public fields_options = { 
        'vipclass': { 
            'type': 'VipEnum',
            'typeValue': 'bcexs_enums.VipEnum'
        },
        'bonusupper': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'bonuslower': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'vipclass',
        'bonusupper',
        'bonuslower'
    ];
}


export class BonusVipRulePut extends FeildCheck {

    
    public bonuslower: number;  // 等级积分最低
    
    public bonusupper: number;  // 等级积分最高
    
    public ruleid: number;  // 规则id
    
    public fields_options = { 
        'bonuslower': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'bonusupper': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'ruleid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'bonuslower',
        'bonusupper',
        'ruleid'
    ];
}


export class CoinCurrencysDelete extends FeildCheck {

    
    public marketid: number;  // 市场id
    
    public coincode: string;  // 币代码
    
    public fields_options = { 
        'marketid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'coincode': { 
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'marketid',
        'coincode'
    ];
}


export class CoinCurrencysGet extends FeildCheck {

    
    public marketid: number;  // 市场id
    
    public coincode: string;  // 币代码
    
    public fields_options = { 
        'marketid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'coincode': { 
            'maxlen': '8',
            'type': 'string8',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'marketid',
        'coincode'
    ];
}


export class CoinCurrencysPost extends FeildCheck {

    
    public marketid: number;  // 市场id
    
    public coincode: string;  // 币代码
    
    public fields_options = { 
        'marketid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'coincode': { 
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'marketid',
        'coincode'
    ];
}


export class CoinInfoGet extends FeildCheck {

    
    public coincode: string;  // 币代码
    
    public fields_options = { 
        'coincode': { 
            'maxlen': '8',
            'type': 'string8',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'coincode'
    ];
}


export class CoinInfoPost extends FeildCheck {

    
    public coincnname: string;  // 币种中文名
    
    public refillstatus: bcexs_enums.IOStatusEnum;  // 充值状态
    
    public pubdtime: Date;  // 上市时间
    
    public wdstatus: bcexs_enums.IOStatusEnum;  // 提现状态
    
    public coinname: string;  // 币种名称
    
    public coincode: string;  // 币代码
    
    public fields_options = { 
        'coincnname': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'refillstatus': { 
            'type': 'IOStatusEnum',
            'typeValue': 'bcexs_enums.IOStatusEnum'
        },
        'pubdtime': { 
            'type': 'datetime',
            'typeValue': 'Date'
        },
        'wdstatus': { 
            'type': 'IOStatusEnum',
            'typeValue': 'bcexs_enums.IOStatusEnum'
        },
        'coinname': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'coincode': { 
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'coincnname',
        'refillstatus',
        'pubdtime',
        'wdstatus',
        'coinname',
        'coincode'
    ];
}


export class CoinInfoPut extends FeildCheck {

    
    public coincnname: string;  // 币种中文名
    
    public refillstatus: bcexs_enums.IOStatusEnum;  // 充值状态
    
    public pubdtime: Date;  // 上市时间
    
    public wdstatus: bcexs_enums.IOStatusEnum;  // 提现状态
    
    public coinname: string;  // 币种名称
    
    public coincode: string;  // 币代码
    
    public fields_options = { 
        'coincnname': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'refillstatus': { 
            'type': 'IOStatusEnum',
            'typeValue': 'bcexs_enums.IOStatusEnum'
        },
        'pubdtime': { 
            'type': 'datetime',
            'typeValue': 'Date'
        },
        'wdstatus': { 
            'type': 'IOStatusEnum',
            'typeValue': 'bcexs_enums.IOStatusEnum'
        },
        'coinname': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'coincode': { 
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'coincnname',
        'refillstatus',
        'pubdtime',
        'wdstatus',
        'coinname',
        'coincode'
    ];
}


export class CoinPairGet extends FeildCheck {

    
    public pairid: number;  // 交易对id
    
    public fields_options = { 
        'pairid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'pairid'
    ];
}


export class CoinPairPost extends FeildCheck {

    
    public amountscale: number;  // 金额小数位
    
    public marketid: number;  // 市场id
    
    public symbolcode: string;  // 交易对标的币
    
    public pairname: string;  // 交易对名称
    
    public currencycode: string;  // 交易对结算币
    
    public pricescale: number;  // 报价小数位
    
    public pairstatus: bcexs_enums.PairStatusEnum;  // 交易对状态
    
    public fields_options = { 
        'amountscale': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'marketid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'symbolcode': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'pairname': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'currencycode': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'pricescale': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'pairstatus': { 
            'type': 'PairStatusEnum',
            'typeValue': 'bcexs_enums.PairStatusEnum'
        },
    };

    public field_keys: string[] = [
        'amountscale',
        'marketid',
        'symbolcode',
        'pairname',
        'currencycode',
        'pricescale',
        'pairstatus'
    ];
}


export class CoinPairPut extends FeildCheck {

    
    public pricescale: number;  // 报价小数位
    
    public amountscale: number;  // 金额小数位
    
    public pairid: number;  // 交易对id
    
    public pairstatus: bcexs_enums.PairStatusEnum;  // 交易对状态
    
    public fields_options = { 
        'pricescale': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'amountscale': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'pairid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'pairstatus': { 
            'type': 'PairStatusEnum',
            'typeValue': 'bcexs_enums.PairStatusEnum'
        },
    };

    public field_keys: string[] = [
        'pricescale',
        'amountscale',
        'pairid',
        'pairstatus'
    ];
}


export class BcexMarketGet extends FeildCheck {

    
    public marketid: number;  // 交易市场Id
    
    public fields_options = { 
        'marketid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'marketid'
    ];
}


export class BcexMarketPut extends FeildCheck {

    
    public tradestatus: bcexs_enums.TradeStatusEnum;  // 交易状态
    
    public trademodel: bcexs_enums.MarketModeEnum;  // 交易模式
    
    public opofsettlement: bcexs_enums.OperatorEnum;  // 结算模式
    
    public marketid: number;  // 交易市场Id
    
    public marketname: string;  // 交易市场名称
    
    public risktype: bcexs_enums.RiskEnum;  // 风险率计算公式
    
    public settlementtype: bcexs_enums.SettlementEnum;  // 结算负债模式
    
    public opofocmarket: bcexs_enums.OperatorEnum;  // 开休市模式
    
    public fields_options = { 
        'tradestatus': { 
            'type': 'TradeStatusEnum',
            'typeValue': 'bcexs_enums.TradeStatusEnum'
        },
        'trademodel': { 
            'type': 'MarketModeEnum',
            'typeValue': 'bcexs_enums.MarketModeEnum'
        },
        'opofsettlement': { 
            'type': 'OperatorEnum',
            'typeValue': 'bcexs_enums.OperatorEnum'
        },
        'marketid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'marketname': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'risktype': { 
            'type': 'RiskEnum',
            'typeValue': 'bcexs_enums.RiskEnum'
        },
        'settlementtype': { 
            'type': 'SettlementEnum',
            'typeValue': 'bcexs_enums.SettlementEnum'
        },
        'opofocmarket': { 
            'type': 'OperatorEnum',
            'typeValue': 'bcexs_enums.OperatorEnum'
        },
    };

    public field_keys: string[] = [
        'tradestatus',
        'trademodel',
        'opofsettlement',
        'marketid',
        'marketname',
        'risktype',
        'settlementtype',
        'opofocmarket'
    ];
}


export class PairPropertyDelete extends FeildCheck {

    
    public propertyid: number;  // 属性id
    
    public fields_options = { 
        'propertyid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'propertyid'
    ];
}


export class PairPropertyGet extends FeildCheck {

    
    public propertyid: number;  // 属性id
    
    public fields_options = { 
        'propertyid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'propertyid'
    ];
}


export class PairPropertyPost extends FeildCheck {

    
    public wdtimeslimit: number;  // 今日提现次数限制
    
    public wdamountlimit: number;  // 今日提现额度限制
    
    public propertyname: string;  // 属性对名称
    
    public quantitylimitonce: number;  // 单次下单额度限制
    
    public takerfeeratio: number;  // 主动吃单手续费
    
    public quantitylimitday: number;  // 全天下单额度限制
    
    public wdfeeratio: number;  // 提现手续费
    
    public makerfeeratio: number;  // 挂单成交手续费
    
    public pairid: number;  // 交易对id
    
    public referrfeeratio: number;  // 推荐费
    
    public fields_options = { 
        'wdtimeslimit': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'wdamountlimit': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'propertyname': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'quantitylimitonce': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'takerfeeratio': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'quantitylimitday': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'wdfeeratio': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'makerfeeratio': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'pairid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'referrfeeratio': { 
            'type': 'double',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'wdtimeslimit',
        'wdamountlimit',
        'propertyname',
        'quantitylimitonce',
        'takerfeeratio',
        'quantitylimitday',
        'wdfeeratio',
        'makerfeeratio',
        'pairid',
        'referrfeeratio'
    ];
}


export class PairPropertyPut extends FeildCheck {

    
    public propertyid: number;  // 属性id
    
    public wdtimeslimit: number;  // 今日提现次数限制
    
    public wdamountlimit: number;  // 今日提现额度限制
    
    public propertyname: string;  // 属性对名称
    
    public quantitylimitonce: number;  // 单次下单额度限制
    
    public takerfeeratio: number;  // 主动吃单手续费
    
    public quantitylimitday: number;  // 全天下单额度限制
    
    public wdfeeratio: number;  // 提现手续费
    
    public makerfeeratio: number;  // 挂单成交手续费
    
    public referrfeeratio: number;  // 推荐费
    
    public fields_options = { 
        'propertyid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'wdtimeslimit': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'wdamountlimit': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'propertyname': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'quantitylimitonce': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'takerfeeratio': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'quantitylimitday': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'wdfeeratio': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'makerfeeratio': { 
            'type': 'double',
            'typeValue': 'number'
        },
        'referrfeeratio': { 
            'type': 'double',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'propertyid',
        'wdtimeslimit',
        'wdamountlimit',
        'propertyname',
        'quantitylimitonce',
        'takerfeeratio',
        'quantitylimitday',
        'wdfeeratio',
        'makerfeeratio',
        'referrfeeratio'
    ];
}


export class PairPropertyGroupDelete extends FeildCheck {

    
    public propertygroupid: number;  // 属性组id
    
    public fields_options = { 
        'propertygroupid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'propertygroupid'
    ];
}


export class PairPropertyGroupGet extends FeildCheck {

    
    public propertygroupid: number;  // 属性组id
    
    public fields_options = { 
        'propertygroupid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'propertygroupid'
    ];
}


export class PairPropertyGroupPost extends FeildCheck {

    
    public note: string;  // 备注
    
    public groupname: string;  // 属性组名称
    
    public fields_options = { 
        'note': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'groupname': { 
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'note',
        'groupname'
    ];
}


export class PairPropertyGroupPut extends FeildCheck {

    
    public note: string;  // 备注
    
    public propertygroupid: number;  // 属性组id
    
    public groupname: string;  // 属性组名称
    
    public fields_options = { 
        'note': { 
            'type': 'string',
            'typeValue': 'string'
        },
        'propertygroupid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'groupname': { 
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'note',
        'propertygroupid',
        'groupname'
    ];
}


export class PairPropertyGroupMapDelete extends FeildCheck {

    
    public propertygroupid: number;  // 属性组id
    
    public pairid: number;  // 交易对id
    
    public fields_options = { 
        'propertygroupid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'pairid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'propertygroupid',
        'pairid'
    ];
}


export class PairPropertyGroupMapGet extends FeildCheck {

    
    public propertygroupid: number;  // 属性组id
    
    public pairid: number;  // 交易对id
    
    public fields_options = { 
        'propertygroupid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'pairid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'propertygroupid',
        'pairid'
    ];
}


export class PairPropertyGroupMapPost extends FeildCheck {

    
    public propertyid: number;  // 属性id
    
    public propertygroupid: number;  // 属性组id
    
    public fields_options = { 
        'propertyid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
        'propertygroupid': { 
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'propertyid',
        'propertygroupid'
    ];
}


export class MuserImagesPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserImagesPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserUsersContactGet extends FeildCheck {

    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'userid'
    ];
}


export class UserUsersIdcardGet extends FeildCheck {

    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'userid'
    ];
}


export class UserUsersGet extends FeildCheck {

    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'userid'
    ];
}


export class UserStatusUsersGet extends FeildCheck {

    
    public userid: number;  // 用户id
    
    public statustype: users_enums.EnumUserStatusType;  // 状态类型
    
    public fields_options = { 
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'statustype': { 
            'maxlen': 'none',
            'type': 'EnumUserStatusType',
            'typeValue': 'users_enums.EnumUserStatusType'
        },
    };

    public field_keys: string[] = [
        'userid',
        'statustype'
    ];
}


export class UserUsersPost extends FeildCheck {

    
    public userpwd: string;  // 用户密码
    
    public idtype: users_enums.EnumIdType;  // 证件类型
    
    public brokeruserid: number;  // 用户id
    
    public email: string;  // 电子邮箱
    
    public username: string;  // 用户姓名
    
    public country: string;  // 国籍
    
    public idcardvaild: Date;  // 证件有效期
    
    public logincode: string;  // 登录账号
    
    public nikename: string;  // 用户昵称
    
    public phone: string;  // 手机号码
    
    public idcard: string;  // 证件号码
    
    public telcode: string;  // 电话区号
    
    public jsoncache: string;  // 附加字段
    
    public fields_options = { 
        'userpwd': { 
            'maxlen': '64',
            'type': 'string64',
            'typeValue': 'string'
        },
        'idtype': { 
            'maxlen': 'none',
            'type': 'EnumIdType',
            'typeValue': 'users_enums.EnumIdType'
        },
        'brokeruserid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'email': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'username': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'country': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idcardvaild': { 
            'maxlen': 'none',
            'type': 'date',
            'typeValue': 'Date'
        },
        'logincode': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'nikename': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'phone': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idcard': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'telcode': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'jsoncache': { 
            'maxlen': '512',
            'type': 'jsonString',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'userpwd',
        'idtype',
        'brokeruserid',
        'email',
        'username',
        'country',
        'idcardvaild',
        'logincode',
        'nikename',
        'phone',
        'idcard',
        'telcode',
        'jsoncache'
    ];
}


export class UserUsersContactPut extends FeildCheck {

    
    public userid: number;  // 用户id
    
    public country: string;  // 国籍
    
    public telcode: string;  // 电话区号
    
    public phone: string;  // 手机号码
    
    public email: string;  // 电子邮箱
    
    public fields_options = { 
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'country': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'telcode': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'phone': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'email': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'userid',
        'country',
        'telcode',
        'phone',
        'email'
    ];
}


export class UserUsersIdcardPut extends FeildCheck {

    
    public idcard: string;  // 证件号码
    
    public idcardvaild: Date;  // 证件有效期
    
    public idtype: users_enums.EnumIdType;  // 证件类型
    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'idcard': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idcardvaild': { 
            'maxlen': 'none',
            'type': 'date',
            'typeValue': 'Date'
        },
        'idtype': { 
            'maxlen': 'none',
            'type': 'EnumIdType',
            'typeValue': 'users_enums.EnumIdType'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'idcard',
        'idcardvaild',
        'idtype',
        'userid'
    ];
}


export class UserUsersPut extends FeildCheck {

    
    public nikename: string;  // 用户昵称
    
    public jsoncache: string;  // 附加字段
    
    public userid: number;  // 用户id
    
    public username: string;  // 用户姓名
    
    public fields_options = { 
        'nikename': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'jsoncache': { 
            'maxlen': '512',
            'type': 'jsonString',
            'typeValue': 'string'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'username': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'nikename',
        'jsoncache',
        'userid',
        'username'
    ];
}


export class UserStatusUsersPut extends FeildCheck {

    
    public statusvalue: string;  // 状态值
    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'statusvalue': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'statusvalue',
        'userid'
    ];
}


export class UserAreacodeDelete extends FeildCheck {

    
    public numcode: string;  // 数字编码
    
    public fields_options = { 
        'numcode': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'numcode'
    ];
}


export class UserAreacodeGet extends FeildCheck {

    
    public numcode: string;  // 数字编码
    
    public fields_options = { 
        'numcode': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'numcode'
    ];
}


export class UserAreacodePost extends FeildCheck {

    
    public numcode: string;  // 数字编码
    
    public enname: string;  // 英文名称
    
    public cnname: string;  // 中文名称
    
    public areadesc: string;  // 备注信息
    
    public threecode: string;  // 三位编码
    
    public twocode: string;  // 二位编码
    
    public telcode: string;  // 手机区号
    
    public fields_options = { 
        'numcode': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'enname': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'cnname': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'areadesc': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'threecode': { 
            'maxlen': '8',
            'type': 'string8',
            'typeValue': 'string'
        },
        'twocode': { 
            'maxlen': '8',
            'type': 'string8',
            'typeValue': 'string'
        },
        'telcode': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'numcode',
        'enname',
        'cnname',
        'areadesc',
        'threecode',
        'twocode',
        'telcode'
    ];
}


export class UserAreacodePut extends FeildCheck {

    
    public threecode: string;  // 三位编码
    
    public enname: string;  // 英文名称
    
    public cnname: string;  // 中文名称
    
    public twocode: string;  // 二位编码
    
    public numcode: string;  // 数字编码
    
    public telcode: string;  // 手机区号
    
    public areadesc: string;  // 备注信息
    
    public fields_options = { 
        'threecode': { 
            'maxlen': '8',
            'type': 'string8',
            'typeValue': 'string'
        },
        'enname': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'cnname': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'twocode': { 
            'maxlen': '8',
            'type': 'string8',
            'typeValue': 'string'
        },
        'numcode': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'telcode': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'areadesc': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'threecode',
        'enname',
        'cnname',
        'twocode',
        'numcode',
        'telcode',
        'areadesc'
    ];
}


export class UserParamesDelete extends FeildCheck {

    
    public paramsname: string;  // 配置名称
    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'paramsname': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'paramsname',
        'userid'
    ];
}


export class UserParamesGet extends FeildCheck {

    
    public paramsname: string;  // 配置名称
    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'paramsname': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'paramsname',
        'userid'
    ];
}


export class UserParamesPut extends FeildCheck {

    
    public paramsvalue: string;  // 配置值
    
    public paramsname: string;  // 配置名称
    
    public paramssection: string;  // 配置段
    
    public userid: number;  // 用户id
    
    public fields_options = { 
        'paramsvalue': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'paramsname': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'paramssection': { 
            'maxlen': '16',
            'type': 'string16',
            'typeValue': 'string'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'paramsvalue',
        'paramsname',
        'paramssection',
        'userid'
    ];
}


export class UsersStepOneDescGet extends FeildCheck {

    
    public reviewid: number;  // 审核id
    
    public fields_options = { 
        'reviewid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'reviewid'
    ];
}


export class UsersStepOneLogDescGet extends FeildCheck {

    
    public reviewid: number;  // 审核id
    
    public fields_options = { 
        'reviewid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'reviewid'
    ];
}


export class UsersStepOneLogGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UsersStepOneGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UsersStepTwoGet extends FeildCheck {

    
    public reviewid: number;  // 审核id
    
    public fields_options = { 
        'reviewid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
    };

    public field_keys: string[] = [
        'reviewid'
    ];
}


export class UsersStepTwoLogDescGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UsersStepTwoLogGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UsersStepTwoDescGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UsersStepOnePost extends FeildCheck {

    
    public idtype: users_enums.EnumIdType;  // 证件类型
    
    public userid: number;  // 用户id
    
    public username: string;  // 用户姓名
    
    public country: string;  // 国籍
    
    public idcardvaild: Date;  // 证件有效期
    
    public idcard: string;  // 证件号码
    
    public telcode: string;  // 电话区号
    
    public fields_options = { 
        'idtype': { 
            'maxlen': 'none',
            'type': 'EnumIdType',
            'typeValue': 'users_enums.EnumIdType'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'username': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'country': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'idcardvaild': { 
            'maxlen': 'none',
            'type': 'date',
            'typeValue': 'Date'
        },
        'idcard': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'telcode': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'idtype',
        'userid',
        'username',
        'country',
        'idcardvaild',
        'idcard',
        'telcode'
    ];
}


export class UsersStepTwoPost extends FeildCheck {

    
    public img_idcard_hand: string;  // 图片地址
    
    public userid: number;  // 用户id
    
    public img_idcard_front: string;  // 图片地址
    
    public img_idcard_back: string;  // 图片地址
    
    public fields_options = { 
        'img_idcard_hand': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'userid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'img_idcard_front': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
        'img_idcard_back': { 
            'maxlen': '32',
            'type': 'string32',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'img_idcard_hand',
        'userid',
        'img_idcard_front',
        'img_idcard_back'
    ];
}


export class UsersStepOnePut extends FeildCheck {

    
    public reviewid: number;  // 审核id
    
    public lastopstatus: admins_enums.EnumDataReviewStatus;  // 最后审核状态
    
    public lastopdesc: string;  // 最后审核描述
    
    public fields_options = { 
        'reviewid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'lastopstatus': { 
            'maxlen': 'none',
            'type': 'EnumDataReviewStatus',
            'typeValue': 'admins_enums.EnumDataReviewStatus'
        },
        'lastopdesc': { 
            'maxlen': '64',
            'type': 'string64',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'reviewid',
        'lastopstatus',
        'lastopdesc'
    ];
}


export class UsersStepTwoPut extends FeildCheck {

    
    public reviewid: number;  // 审核id
    
    public lastopstatus: admins_enums.EnumDataReviewStatus;  // 最后审核状态
    
    public lastopdesc: string;  // 最后审核描述
    
    public fields_options = { 
        'reviewid': { 
            'maxlen': 'none',
            'type': 'int32',
            'typeValue': 'number'
        },
        'lastopstatus': { 
            'maxlen': 'none',
            'type': 'EnumDataReviewStatus',
            'typeValue': 'admins_enums.EnumDataReviewStatus'
        },
        'lastopdesc': { 
            'maxlen': '64',
            'type': 'string64',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'reviewid',
        'lastopstatus',
        'lastopdesc'
    ];
}

