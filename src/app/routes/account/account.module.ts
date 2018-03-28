import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RoleComponent } from './role/role.component';
import { RoleEditComponent } from './role/role-edit/role-edit.component';
import { ManagerComponent } from './manager/manager.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';
import { ManagerEditComponent } from './manager/manager-edit/manager-edit.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEidtComponent } from './user/user-eidt/user-eidt.component';
import { AppfileComponent } from './appfile/appfile.component';
import { RoleAddComponent } from './role/role-add/role-add.component';
import { RoleRightComponent } from './role/role-right/role-right.component';
import { VipruleComponent } from './viprule/viprule.component';
import { VipruleAddComponent } from './viprule/viprule-add/viprule-add.component';
import { VipruleEditComponent } from './viprule/viprule-edit/viprule-edit.component';
import { VipPrivilegeComponent } from './vip-privilege/vip-privilege.component';
import { BonusRuleComponent } from './bonus-rule/bonus-rule.component';
import { BonusRuleEditComponent } from './bonus-rule/bonus-rule-edit/bonus-rule-edit.component';
import { BonusRuleAddComponent } from './bonus-rule/bonus-rule-add/bonus-rule-add.component';
import { VipPrivilegeAddComponent } from './vip-privilege/vip-privilege-add/vip-privilege-add.component';
import { VipPrivilegeEditComponent } from './vip-privilege/vip-privilege-edit/vip-privilege-edit.component';


const routes: Routes = [
    { path: 'role', component: RoleComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'user', component: UserComponent },
    { path: 'appfile', component: AppfileComponent },
    { path: 'viprule', component: VipruleComponent },
    { path: 'vip/privilege', component: VipPrivilegeComponent },
    { path: 'bonus/rule', component: BonusRuleComponent },

];

// 新增功能组件必须添加到该列表
const COMPONENTS_NOROUNT = [
    RoleEditComponent,
    MenuEditComponent,
    ManagerEditComponent,
    UserAddComponent,
    UserEidtComponent,
    RoleAddComponent,
    RoleRightComponent,
    VipruleEditComponent,
    VipruleAddComponent,
    VipPrivilegeAddComponent,
    VipPrivilegeEditComponent,
    BonusRuleEditComponent,
    BonusRuleAddComponent,
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    providers: [],
    declarations: [
        RoleComponent,
        ManagerComponent,
        MenuComponent,
        RoleEditComponent,
        ManagerEditComponent,
        UserComponent,
        UserAddComponent,
        UserEidtComponent,
        AppfileComponent,
        RoleAddComponent,
        RoleRightComponent,
        VipruleComponent,
        VipruleAddComponent,
        VipruleEditComponent,
        VipPrivilegeComponent,
        BonusRuleComponent,
        BonusRuleEditComponent,
        BonusRuleAddComponent,
        VipPrivilegeAddComponent,
        VipPrivilegeEditComponent,
        MenuEditComponent
    ],
    exports: [
        RouterModule
    ],
    entryComponents: COMPONENTS_NOROUNT
})
export class AccountModule { }
