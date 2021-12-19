import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutes } from './users.routing';

import { PolyglotModule } from '../../polyglot.module';

import { UsersComponent } from './users.component';
import { UsersAddComponent } from './users-add/users-add.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ColorPickerModule } from 'ngx-color-picker';


// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
    declarations: [
        UsersComponent,
        UsersAddComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(UsersRoutes),
        // NgbModule,
        PolyglotModule,
        BsDatepickerModule.forRoot(),
        // TimepickerModule.forRoot(),
        ButtonsModule.forRoot(),
        ColorPickerModule
    ],
    providers: [

    ]
})
export class UsersModule { }
