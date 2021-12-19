import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardRoutes } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes)
    ],
    providers: [

    ],
})
export class DashboardModule { }
