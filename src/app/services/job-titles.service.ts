import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from '../utilities/globals';

@Injectable({
    providedIn: 'root'
})
export class JobTitlesService {

    constructor(
        public http: HttpClient
    ) { }

    create(data: any): Promise<any> {
        const url = `${_.BASE_URL}/job-titles`;
        return this.http.post(url, data).toPromise();
    }

    fetch(data: any): Promise<any> {
        const url = `${_.BASE_URL}/job-titles`;
        return this.http.get(url, { params: data }).toPromise();
    }
}
