import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from '../utilities/globals';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        public http: HttpClient
    ) { }

    login(data:any): Promise<any> {
        const url = `${_.BASE_URL}/accounts/login`;
        return this.http.post(url, data).toPromise();
    }

    refresh(): Promise<any> {
        const url = `${_.BASE_URL}/accounts/refresh`;
        return this.http.get(url).toPromise();
    }

    setSession(res:any) {
        localStorage.setItem('o__token', res.token);
    }

    unsetSession() {
        localStorage.removeItem("o__token");
    }
}
