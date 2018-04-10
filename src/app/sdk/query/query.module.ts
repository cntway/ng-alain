import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { QuerySdkService } from "./query.service";


@NgModule({
  imports: [
  ],
  providers: [
    QuerySdkService
  ]
})
export class QueryModule {
  constructor(@Optional() @SkipSelf() parentModule: QueryModule) {
    throwIfAlreadyLoaded(parentModule, 'SdkModule');
  }
}
