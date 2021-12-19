import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutRoutes } from './main-layout.routing';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(MainLayoutRoutes)
    ],
    providers: [
        
    ]
})
export class MainLayoutModule { }
