import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UploaderComponent } from './uploader.component';

import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
    declarations: [
        UploaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FileUploadModule
    ],
    exports: [
        UploaderComponent
    ]
})
export class UploaderModule { }
