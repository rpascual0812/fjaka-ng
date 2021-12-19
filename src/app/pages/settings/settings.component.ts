import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as moment from "moment";
import * as _ from '../../utilities/globals';
declare var $: any;

import { GlobalService } from "../../services/global.service";
import { SettingsService } from '../../services/settings.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    cutoffs: any = [];
    filters: any = {};
    settings: any = [];
    filed_settings: any = [];

    config: any = {
        lang: 'en_us'
    };

    constructor(
        private globalService: GlobalService,
        private translateService: TranslateService,
        private settingsService: SettingsService
    ) {
        this.translateService.setDefaultLang('en_us');

        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en_us|es/) ? browserLang : 'en_us');
        this.config.lang = browserLang.match(/en_us|es/) ? browserLang : 'en_us';

        if(localStorage.getItem('lang')) {
            this.translateService.use(localStorage.getItem('lang'));
        }
    }

    ngOnInit(): void {

    }



}
