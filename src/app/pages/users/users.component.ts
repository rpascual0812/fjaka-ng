import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import * as moment from "moment";

import { GlobalService } from "../../services/global.service";
import { UsersService } from '../../services/users.service';
import { BridgeService } from "../../services/bridge.service";

import * as _ from '../../utilities/globals';
declare var $: any;

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    cutoffs: any = [];
    selectedCutoffPk = null;
    timelogForm: FormGroup;
    submitted = false;
    isHalfday: boolean = false;
    users: any = [];

    logs: any = [];
    pagination: any = {
        page: 1,
        count: 0,
        tableSize: 10
    };
    tableSizes = [10, 20, 30, 40, 50, 100, 300, 500, 1000];

    filters: any = {
        search: ''
    };

    config: any = {
        lang: 'en_us'
    };

    dateConfig: any = { isAnimated: true, containerClass:'theme-dark-blue', dateInputFormat: 'YYYY/MM/DD' };

    select_all: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private globalService: GlobalService,
        private bridgeService: BridgeService,
        private translateService: TranslateService,
        private usersService: UsersService,
        // private calendar: NgbCalendar
    ) {
        this.translateService.setDefaultLang('en_us');

        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en_us|es/) ? browserLang : 'en_us');
        this.config.lang = browserLang.match(/en_us|es/) ? browserLang : 'en_us';

        if(localStorage.getItem('lang')) {
            this.translateService.use(localStorage.getItem('lang'));
        }

        this.setTimelogForm();
    }

    ngOnInit(): void {
        this.fetch();
        // this.bridgeService.sharedLanguage.subscribe(language => this.translateService.use(language));
    }

    setTimelogForm() {
        let date_now: Date = new Date(); // Moment JS has no power here...
        this.timelogForm = this.formBuilder.group({
            clock_type: ['in', Validators.required],
            date: [moment().format('YYYY/MM/DD'), Validators.required],
            time: [date_now, Validators.required],
            remarks: ['', Validators.required],
        });
    }

    changeLang() {
        this.translateService.use(this.config.lang);
    }

    fetch() {
        let data = {
            pagination: _.stringify(this.pagination),
            filters: _.stringify(this.filters)
        }
        console.log(data);
        this.usersService.fetch(data)
        .then((data) => {
            console.log(data.data);
            this.users = data.data;
        })
        .catch((err) => {
            this.globalService.errorLog(err);
            // console.log('translation', this.translateService.instant('my_i18n_json_defined_key'));
            _.errorMessage(this.translateService.instant('ERROR.NO_DATA_FOUND'));
        });
    }

    search() {
        this.pagination.page = 1;
        this.fetch();
    }

    get f() { return this.timelogForm.controls; }


    submitTimeLog() {
        this.submitted = true;

        if (this.timelogForm.invalid) {
            return;
        }

        this.timelogForm.value.date = moment(this.timelogForm.value.date, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
        this.timelogForm.value.time = moment(this.timelogForm.value.time, 'HH:mm:ss').format('HH:mm:ss');
        this.timelogForm.value.status = 'pending';
        this.timelogForm.value.type = 'manual';
        console.log(this.timelogForm.value);
        this.usersService.save(this.timelogForm.value)
        .then((data:any) => {
            $('#missingClock').modal('hide');
            this.fetch();
            // this.setTimelogForm();
        })
        .catch((err) => {
            this.globalService.errorLog(err);
            _.errorMessage("An error occurred while submitting your request. Please try again");
        });
    }

    selectAllToggle() {
        this.select_all = !this.select_all;

        this.logs.forEach((log:any) => {
            if (!log.status || log.status == 'approved') {
                log.selected = this.select_all;
            }
        });
    }

    // this is the downside, we need to set an on change to get the final value of ng-select
    clock_type_change(event: any) {
        this.timelogForm.get('clock_type').patchValue(event.value);
    }

    delete(i: any) {
        _.confirmMessage({
            title: "Are you sure you want to delete this time log?",
            text: "",
            confirm: 'I\'m sure!',
            cancel: 'Cancel!'
        }, (result: boolean) => {
            if(result){
                this.usersService.delete(this.logs[i].pk)
                .then((data:any) => {
                    this.logs.splice(i, 1);
                })
                .catch((err:any) => {
                    this.globalService.errorLog(err);
                    _.errorMessage("An error occurred while submitting your request. Please try again");
                });
            }
        });

    }

    onTableDataChange(event:any){
        console.log(event);
        this.pagination.page = event;
        this.fetch();
    }
    onTableSizeChange(event:any): void {
        this.pagination.tableSize = event.target.value;
        this.pagination.page = 1;
        this.fetch();
    }

}
