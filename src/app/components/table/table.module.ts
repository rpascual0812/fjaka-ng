import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPaginationModule } from 'ngx-pagination';

import { TableComponent } from './table.component';

@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule
    ],
    exports: [
        TableComponent
    ],
})
export class TableModule { }
