import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import * as _ from '../../utilities/globals';

// import { BridgeService } from "../../services/bridge.service";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public menuItems: any[];
    public adminMenuItems: any[];
    public isCollapsed = true;

    constructor(
        private router: Router,
        private translate: TranslateService,
        // private bridgeService: BridgeService,
    ) {
        this.translate.setDefaultLang('en_us');

        const browserLang = translate.getBrowserLang();
        this.translate.use(browserLang.match(/en_us|es/) ? browserLang : 'en_us');

        if(localStorage.getItem('lang')) {
            this.translate.use(localStorage.getItem('lang'));
        }
    }

    ngOnInit() {
        // this.bridgeService.sharedLanguage.subscribe(language => {
        //     console.log('triggered', language);
        //     this.translate.use(language);
        //     this.menuItems = [];
        //     this.generate_menu();
        // });
        // this.menuItems = ROUTES.filter(menuItem => menuItem);

        this.generate_menu();
        this.generate_admin_menu();

        this.router.events.subscribe((event:any) => {
            this.isCollapsed = true;
        });
    }

    generate_menu() {
            this.menuItems = _.routes.filter((i:any) => {
            this.translate.get(i.title).subscribe((text:string) => {
                i.title = text;
            });
            return i;
        });
    }

    generate_admin_menu() {
            this.adminMenuItems = _.admin_routes.filter((i:any) => {
            this.translate.get(i.title).subscribe((text:string) => {
                i.title = text;
            });
            return i;
        });
    }
}
