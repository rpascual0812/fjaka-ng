import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from '../utilities/globals';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    constructor(
        public http: HttpClient
    ) { }

    last(): Promise<any> {
        const url = `${_.BASE_URL}/timelogs/last`;
        return this.http.get(url).toPromise();
    }

    save(object: any): Promise<any> {
        const url = `${_.BASE_URL}/timelogs/upload`;
        return this.http.post(url, object).toPromise();
    }

    save_no_photo(object: any): Promise<any> {
        const url = `${_.BASE_URL}/timelogs`;
        return this.http.post(url, object).toPromise();
    }

    fetch(filters: any): Promise<any> {
        const url = `${_.BASE_URL}/timelogs`;

        let params = _.objectToParams(filters);
        return this.http.get(url, { params: params }).toPromise();
    }

    delete(pk: any): Promise<any> {
        const url = `${_.BASE_URL}/timelogs/${pk}`;

        return this.http.delete(url).toPromise();
    }

}
