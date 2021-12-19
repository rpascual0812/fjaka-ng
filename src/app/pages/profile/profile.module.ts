import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutes } from './profile.routing';

import { UploaderModule } from '../../components/uploader/uploader.module';
import { PolyglotModule } from '../../polyglot.module';

import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(ProfileRoutes),
        PolyglotModule,
        UploaderModule
    ],
    providers: [

    ]
})
export class ProfileModule { }
