import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PolyglotModule } from '../polyglot.module';

import { BridgeService } from '../services/bridge.service';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        PolyglotModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ],
    providers: [
        BridgeService
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent
    ]
})
export class ComponentsModule { }
