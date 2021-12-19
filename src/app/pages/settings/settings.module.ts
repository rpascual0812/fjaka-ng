import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { SettingsRoutes } from './settings.routing';
import { SettingsComponent } from './settings.component';

import { PolyglotModule } from '../../polyglot.module';
import { JobTitlesComponent } from './job-titles/job-titles.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
    declarations: [
        SettingsComponent,
        JobTitlesComponent,
        EmployeeTypeComponent,
        DepartmentComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(SettingsRoutes),
        PolyglotModule,
        PopoverModule.forRoot()
    ],
    providers: [

    ]
})
export class SettingsModule { }
