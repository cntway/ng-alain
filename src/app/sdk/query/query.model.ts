import * as admins_enums from './query.admins_enum';
import * as users_enums from './query.users_enum';
import * as bcexs_enums from './query.bcexs_enum';
import { FeildCheck } from '../sdk.util';

export function _(val: string): string {
    return val;
}



export class SysExchmoneyQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class SysExchmoneySumQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class SysExchmoneyCsvQueryPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class SysExchmoneyLogQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class SysExchmoneyLogSumQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class SysExchmoneyLogCsvQueryPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserMoneyQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserMoneySumQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserMoneyCsvQueryPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class TradeOrderQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class TradeOrderSumQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class TradeOrderCsvQueryPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class TradeOrderLogQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class TradeOrderLogSumQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class TradeOrderLogCsvQueryPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserBonusQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserBonusSumQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserBonusCsvQueryPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserBonusLogQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserBonusLogSumQueryGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class UserBonusLogCsvQueryPost extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
}


export class ReportCsvDelete extends FeildCheck {

    
    public taskid: string;  // 任务id
    
    public fields_options = { 
        'taskid': { 
            'maxlen': '32',
            'minlen': '1',
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'taskid'
    ];
}


export class ReportCsvDownloadGet extends FeildCheck {

    
    public taskid: string;  // 任务id
    
    public fields_options = { 
        'taskid': { 
            'maxlen': '32',
            'minlen': '1',
            'type': 'string',
            'typeValue': 'string'
        },
    };

    public field_keys: string[] = [
        'taskid'
    ];
}


export class ReportCsvGet extends FeildCheck {

    
    public fields_options = { 
    };

    public field_keys: string[] = [
        
    ];
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

