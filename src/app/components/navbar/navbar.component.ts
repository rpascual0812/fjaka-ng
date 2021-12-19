import { Component, OnInit } from '@angular/core';
// import { ROUTES } from '../sidebar/sidebar.component';
import { Location } from '@angular/common';

import * as _ from '../../utilities/globals';
import { BridgeService } from "../../services/bridge.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public listTitles: any[];
    public location: Location;
    public languages: any[];
    lang: any = 'en_us';

    constructor(
        private bridgeService: BridgeService,
        location: Location
    ) {
        this.location = location;
        this.languages = _.languages;
    }

    ngOnInit() {
        if(!localStorage.getItem('lang')) {
            localStorage.setItem('lang', this.lang);
        }

        this.listTitles = _.routes; // ROUTES.filter(listTitle => listTitle);
        this.getLanguage();
    }

    getTitle(){
        var title = this.location.prepareExternalUrl(this.location.path());
        if(title.charAt(0) === '#'){
            title = title.slice( 1 );
        }

        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === title){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }

    setLanguage(lang: any){
        // this.bridgeService.setLanguage(lang);
        // this.bridgeService.sharedLanguage.subscribe(language => lang);
        localStorage.setItem('lang', lang);
        window.location.reload();
        // this.getLanguage();
    }

    getLanguage() {
        this.lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : this.lang;
    }

}
