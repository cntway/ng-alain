import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MarketComponent } from './market/market.component';
import { MarketEditComponent } from './market/market-edit/market-edit.component';
import { Routes, RouterModule } from '@angular/router';
import { CoinComponent } from './coin/coin.component';
import { CoinAddComponent } from './coin/coin-add/coin-add.component';
import { CoinEditComponent } from './coin/coin-edit/coin-edit.component';
import { PairComponent } from './pair/pair.component';
import { PairAddComponent } from './pair/pair-add/pair-add.component';
import { PairEditComponent } from './pair/pair-edit/pair-edit.component';
import { PairPropertyComponent } from './pair-property/pair-property.component';
import { PairPropertyGroupComponent } from './pair-property-group/pair-property-group.component';
import { PairPropertyGroupMapComponent } from './pair-property-group-map/pair-property-group-map.component';
import { PairPropertyEditComponent } from './pair-property/pair-property-edit/pair-property-edit.component';
import { PairPropertyAddComponent } from './pair-property/pair-property-add/pair-property-add.component';

const routes: Routes = [
  { path: 'market', component: MarketComponent },
  { path: 'coin', component: CoinComponent },
  { path: 'pair', component: PairComponent },
  { path: 'pair/property', component: PairPropertyComponent },
  { path: 'pair/property/group', component: PairPropertyGroupComponent },
  { path: 'pair/property/group/map', component: PairPropertyGroupMapComponent },

];

const COMPONENT_NOROUNT = [
  MarketEditComponent,
  CoinAddComponent,
  CoinEditComponent,
  PairEditComponent,
  PairAddComponent,
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ...COMPONENT_NOROUNT,
    MarketComponent,
    MarketEditComponent,
    CoinComponent,
    CoinAddComponent,
    CoinEditComponent,
    PairComponent,
    PairAddComponent,
    PairEditComponent,
    PairPropertyComponent,
    PairPropertyGroupComponent,
    PairPropertyGroupMapComponent,
    PairPropertyEditComponent,
    PairPropertyAddComponent
  ],
  entryComponents: COMPONENT_NOROUNT
})
export class SystemModule { }
