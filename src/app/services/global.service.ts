import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from '../utilities/globals';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    constructor(
        public http: HttpClient
    ) { }

    errorLog(err:any): Promise<any> {
        const url = `${_.BASE_URL}/error`;
        return this.http.post(url, { error: JSON.stringify(err) }).toPromise();
    }

    selectFetch(data:any): Promise<any> {
        console.log(_.BASE_URL + data);
        const url = `${_.BASE_URL}${data}`;
        return this.http.get(url).toPromise();
    }

    upload(formData:any) {
        const url = `${_.BASE_URL}/file/upload`;
        return this.http.post<any>(url, formData, {
            reportProgress: true,
            observe: 'events'
        });
    }
}
