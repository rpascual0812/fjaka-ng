import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    _form: FormGroup;
    isSubmitted: boolean = false;

    constructor(
        private router: Router,
        private translate: TranslateService,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService
    ) {
        this.translate.setDefaultLang('en_us');

        const browserLang = translate.getBrowserLang();
        this.translate.use(browserLang.match(/en_us|es/) ? browserLang : 'en_us');

        if(localStorage.getItem('lang')) {
            this.translate.use(localStorage.getItem('lang'));
        }
    }

    ngOnInit() {
        this._form = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        // localStorage.setItem('lang', 'en_us');
    }

    ngOnDestroy() {

    }

    // convenience getter for easy access to form fields
    get f() { return this._form.controls; }

    onSubmit() {
        this.isSubmitted = true;
        // console.log(this._form.value);
        // stop here if form is invalid
        if (this._form.invalid) {
            console.log('form is invalid');
            return;
        }

        this.authenticationService.login(this._form.value)
        .then((data:any) => {
            this.authenticationService.setSession(data);

            // window.location.href = '/';
            this.router.navigateByUrl('/');
        })
        .catch((err:any) => {
            Swal.fire('Failed', 'A system error occurred. Please try again!', 'error');
            console.log(err);
        });
    }

}
