import { MenuSelectComponent } from './menuselect/menu-select.component';
import { ZselectComponent } from './zselect/zselect.component';
import { SelectComponent } from './appselect/select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzTreeModule } from 'ng-tree-antd';
// delon
import { NgZorroAntdExtraModule } from 'ng-zorro-antd-extra';
import { AlainThemeModule } from '@delon/theme';
import { AlainACLModule } from '@delon/acl';
import { ZORROMODULES, ABCMODULES } from '../delon.module';
// i18n
import { TranslateModule } from '@ngx-translate/core';

// region: third libs
import { CountdownModule } from 'ngx-countdown';
import { UEditorModule } from 'ngx-ueditor';
import { NgxTinymceModule } from 'ngx-tinymce';
import { NzSchemaFormModule } from 'nz-schema-form';
import { SkdSelectComponent } from './skd-select/skd-select.component';
import { SummodalComponent } from './summodal/summodal.component';

import { ExprotmodalComponent } from './exprotmodal/exprotmodal.component';
import { MenuauthComponent } from './menuauth/menuauth.component';
import { FindBackComponent } from './find-back/find-back.component';
import { FindTableComponent } from './find-table/find-table.component';
const THIRDMODULES = [
    CountdownModule,
    UEditorModule,
    NgxTinymceModule,
    NzSchemaFormModule
];
// endregion

// region: your componets & directives
const COMPONENTS = [
    FindBackComponent,
    FindTableComponent,
    ZselectComponent,
    MenuSelectComponent,
    SelectComponent,
    SkdSelectComponent,
    SummodalComponent,
    ExprotmodalComponent,
    MenuauthComponent];
const DIRECTIVES = [];
// endregion

@NgModule({
    imports: [
        NzTreeModule,
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule.forChild(),
        ...ABCMODULES,
        AlainACLModule,
        // third libs
        ...THIRDMODULES
    ],
    declarations: [
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule,
        ...ABCMODULES,
        AlainACLModule,
        // i18n
        TranslateModule,
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES
    ],
    entryComponents: [
        SummodalComponent,
        ExprotmodalComponent,
        FindTableComponent,
    ],
})
export class SharedModule { }
