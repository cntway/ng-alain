import { parseQueryParam, QueryParam, FeildCheckError, CsvParam, CsvModelPost } from '../sdk.util';
import * as model_sdk from './query.model';
import { SdkBase } from '../sdk.base';
import { Observable } from 'rxjs/Rx';
const SERVICE_URl = queryServerUrl;

export class QuerySdkService extends SdkBase {
    
    
    sys_exchmoney_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/sys_exchmoney/today';
        return this.do('get', url, parames);
    }
    
    sys_exchmoney_sum_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/sys_exchmoney/today/totle';
        return this.do('get', url, parames);
    }
    
    sys_exchmoney_csv_query_post_csv_api(csvname: string, csvdesc: string, queryParam: Array<QueryParam>, sops:any): Observable<any> {
        const parames = new CsvModelPost()
        parames.where = parseQueryParam(queryParam);
        parames.csv.csvname =csvname;
        parames.csv.csvdesc =csvdesc;
        parames.csv.sops = sops;
        const url = SERVICE_URl + '/querys/sys_exchmoney/today/csv';
        return this.do('post', url, parames);
    }
    
    
    sys_exchmoney_log_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/sys_exchmoney_log/today';
        return this.do('get', url, parames);
    }
    
    sys_exchmoney_log_sum_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/sys_exchmoney_log/today/totle';
        return this.do('get', url, parames);
    }
    
    sys_exchmoney_log_csv_query_post_csv_api(csvname: string, csvdesc: string, queryParam: Array<QueryParam>, sops:any): Observable<any> {
        const parames = new CsvModelPost()
        parames.where = parseQueryParam(queryParam);
        parames.csv.csvname =csvname;
        parames.csv.csvdesc =csvdesc;
        parames.csv.sops = sops;
        const url = SERVICE_URl + '/querys/sys_exchmoney_log/today/csv';
        return this.do('post', url, parames);
    }
    
    
    user_money_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/user_hmoney/today';
        return this.do('get', url, parames);
    }
    
    user_money_sum_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/user_money/today/totle';
        return this.do('get', url, parames);
    }
    
    user_money_csv_query_post_csv_api(csvname: string, csvdesc: string, queryParam: Array<QueryParam>, sops:any): Observable<any> {
        const parames = new CsvModelPost()
        parames.where = parseQueryParam(queryParam);
        parames.csv.csvname =csvname;
        parames.csv.csvdesc =csvdesc;
        parames.csv.sops = sops;
        const url = SERVICE_URl + '/querys/user_money/today/csv';
        return this.do('post', url, parames);
    }
    
    
    trade_order_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/trade_order/today';
        return this.do('get', url, parames);
    }
    
    trade_order_sum_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/trade_order/today/totle';
        return this.do('get', url, parames);
    }
    
    trade_order_csv_query_post_csv_api(csvname: string, csvdesc: string, queryParam: Array<QueryParam>, sops:any): Observable<any> {
        const parames = new CsvModelPost()
        parames.where = parseQueryParam(queryParam);
        parames.csv.csvname =csvname;
        parames.csv.csvdesc =csvdesc;
        parames.csv.sops = sops;
        const url = SERVICE_URl + '/querys/trade_order/today/csv';
        return this.do('post', url, parames);
    }
    
    
    trade_order_log_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/trade_order_log/today';
        return this.do('get', url, parames);
    }
    
    trade_order_log_sum_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/trade_order_log/today/totle';
        return this.do('get', url, parames);
    }
    
    trade_order_log_csv_query_post_csv_api(csvname: string, csvdesc: string, queryParam: Array<QueryParam>, sops:any): Observable<any> {
        const parames = new CsvModelPost()
        parames.where = parseQueryParam(queryParam);
        parames.csv.csvname =csvname;
        parames.csv.csvdesc =csvdesc;
        parames.csv.sops = sops;
        const url = SERVICE_URl + '/querys/trade_order_log/today/csv';
        return this.do('post', url, parames);
    }
    
    
    user_bonus_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/user_bonus/today';
        return this.do('get', url, parames);
    }
    
    user_bonus_sum_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/user_bonus/today/totle';
        return this.do('get', url, parames);
    }
    
    user_bonus_csv_query_post_csv_api(csvname: string, csvdesc: string, queryParam: Array<QueryParam>, sops:any): Observable<any> {
        const parames = new CsvModelPost()
        parames.where = parseQueryParam(queryParam);
        parames.csv.csvname =csvname;
        parames.csv.csvdesc =csvdesc;
        parames.csv.sops = sops;
        const url = SERVICE_URl + '/querys/user_bonus/today/csv';
        return this.do('post', url, parames);
    }
    
    
    user_bonus_log_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/user_bonus_log/today';
        return this.do('get', url, parames);
    }
    
    user_bonus_log_sum_query_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/querys/user_bonus_log/today/totle';
        return this.do('get', url, parames);
    }
    
    user_bonus_log_csv_query_post_csv_api(csvname: string, csvdesc: string, queryParam: Array<QueryParam>, sops:any): Observable<any> {
        const parames = new CsvModelPost()
        parames.where = parseQueryParam(queryParam);
        parames.csv.csvname =csvname;
        parames.csv.csvdesc =csvdesc;
        parames.csv.sops = sops;
        const url = SERVICE_URl + '/querys/user_bonus_log/today/csv';
        return this.do('post', url, parames);
    }
    
    
    report_csv_delete_api(parames: model_sdk.ReportCsvDelete): Observable<any> {
        const url = SERVICE_URl + '/report_csv';
        return this.do('delete', url, parames);
    }
    
    
    report_csv_download_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/report_csv/download';
        return this.do('get', url, parames);
    }
    
    report_csv_get_api(queryParam: Array<QueryParam>, PageIndex = 1, pageSize = 10, sort = ''): Observable<any> {
        const parames = { 'page': [(PageIndex - 1) * pageSize, pageSize] };
        if (sort !== '') {
            parames['sort'] = sort;
        }
        parames['where'] = parseQueryParam(queryParam);
        const url = SERVICE_URl + '/report_csv';
        return this.do('get', url, parames);
    }
    
    user_heartbeat_post_api(parames: model_sdk.UserHeartbeatPost): Observable<any> {
        const url = SERVICE_URl + '/login/heartbeat';
        return this.do('put', url, parames);
    }
    
    
    user_login_post_api(parames: model_sdk.UserLoginPost): Observable<any> {
        const url = SERVICE_URl + '/login/loging';
        return this.do('post', url, parames);
    }
    
}
