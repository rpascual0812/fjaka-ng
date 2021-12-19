import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import * as moment from "moment";
import * as _ from '../../../utilities/globals';

import { GlobalService } from "../../../services/global.service";
import { UsersService } from '../../../services/users.service';

@Component({
    selector: 'app-users-add',
    templateUrl: './users-add.component.html',
    styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
    scholarForm: FormGroup;
    color: any;

    config: any = {
        lang: 'en_us'
    };

    dateConfig: any = { isAnimated: true, containerClass:'theme-dark-blue', dateInputFormat: 'YYYY/MM/DD' };

    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private globalService: GlobalService,
        private translateService: TranslateService,
        private usersService: UsersService
    ) {
        this.color = this.random_rgba();

        this.setScholarForm();
    }

    ngOnInit(): void {

    }

    setScholarForm() {
        this.scholarForm = this.formBuilder.group({
            ronin: ['', Validators.required],
            nickname: ['', Validators.required],
            last_name: ['', Validators.required],
            first_name: ['', Validators.required],
            middle_name: ['', Validators.required],
            name_extension: [''],
            mobile_number: ['', Validators.required],
            email: ['', [
                Validators.required,
                Validators.pattern(/^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/)
            ]],
            birth_date: [moment().format('YYYY/MM/DD'), Validators.required],
            genders_pk: ['', Validators.required],
            color: [this.color, Validators.required]
        });


    }

    get f() { return this.scholarForm.controls; }

    genderChange(event: any) {
        if(!event) { // event is undefined meaning the value was deselected
            this.scholarForm.get('genders_pk').patchValue('');
        }
        else if(event.pk) { // selected already exists in the database
            this.scholarForm.get('genders_pk').patchValue(event.pk);
        }
    }
    genderClear(event: any) {
        console.log(2, event);
    }
    genderData(event: any) {
        console.log('job titles data', event);
    }

    random_rgba() {
        var color = Math.floor(0x1000000 * Math.random()).toString(16);
        return '#' + ('000000' + color).slice(-6);
    }

    saveToLocalStorage() {
        console.log('mouse up');
    }

    submit() {
        this.submitted = true;
        console.log(this.scholarForm.invalid);
        console.log(this.scholarForm.value);
        if (this.scholarForm.invalid) {
            return;
        }


        this.usersService.save(this.scholarForm.value)
        .then((data:any) => {

            // console.log(1, this.scholar_number);
        });
    }
}
