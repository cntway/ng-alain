export class ApikesService {
    constructor() {
    }
    public apikeys: object = {};
    public urlMap: object = {};

    public getApikey(parentUrl: string, method: string): string {
        const parentId = this.urlMap[parentUrl];
        if (this.apikeys[parentId]) {
            const keys: Array<string> = this.apikeys[parentId];
            for (const key of keys) {
                if (key.indexOf(method) > -1) {
                    return key
                }
            }
        } else {
            return "FFFF"
        }
    }

    public setApikey(parentId, apikey) {
        if (this.apikeys[parentId]) {
            this.apikeys[parentId].push(apikey);
        } else {
            this.apikeys[parentId] = [apikey]
        }
    }

    public setUrlMap(url, id) {
        this.urlMap[url] = id
    }
}