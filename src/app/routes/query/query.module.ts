import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ExchangeMoneyComponent } from './exchange-money/exchange-money.component';
import { ExchangeMoneyLogComponent } from './exchange-money-log/exchange-money-log.component';
import { UserMoneyComponent } from './user-money/user-money.component';
import { UserTradeOrderLogComponent } from './user-trade-order-log/user-trade-order-log.component';
import { UserTradeOrderComponent } from './user-trade-order/user-trade-order.component';
import { UserBonusComponent } from './user-bonus/user-bonus.component';
import { UserBonusLogComponent } from './user-bonus-log/user-bonus-log.component';
import { ExportTaskComponent } from './export-task/export-task.component';


const routes: Routes = [
  { path: 'exchange/money', component: ExchangeMoneyComponent },
  { path: 'exchange/moneylog', component: ExchangeMoneyLogComponent },
  { path: 'user/money', component: UserMoneyComponent },
  { path: 'user/tradeorder', component: UserTradeOrderComponent },
  { path: 'user/tradeorderlog', component: UserTradeOrderLogComponent },
  { path: 'user/bonus', component: UserBonusComponent },
  { path: 'user/bonuslog', component: UserBonusLogComponent },
  { path: 'export', component: ExportTaskComponent },


];
const COMPONENT_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)

  ],
  declarations: [
    ...COMPONENT_NOROUNT,
    ExchangeMoneyComponent,
    ExchangeMoneyLogComponent,
    UserMoneyComponent,
    UserTradeOrderLogComponent,
    UserTradeOrderComponent,
    UserBonusComponent,
    UserBonusLogComponent,
    ExportTaskComponent
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class QueryModule { }
