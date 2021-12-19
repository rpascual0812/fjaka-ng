import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from '../utilities/globals';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(
        public http: HttpClient
    ) { }

    save_with_photo(object: any): Promise<any> {
        const url = `${_.BASE_URL}/users/upload`;
        return this.http.post(url, object).toPromise();
    }

    save(object: any): Promise<any> {
        const url = `${_.BASE_URL}/users`;
        return this.http.post(url, object).toPromise();
    }

    fetch(params: any): Promise<any> {
        const url = `${_.BASE_URL}/users`;
        console.log(1, params);
        // params = _.objectToParams(params);
        // console.log(2, params);
        return this.http.get(url, { params: params }).toPromise();
    }

    delete(pk: any): Promise<any> {
        const url = `${_.BASE_URL}/users/${pk}`;

        return this.http.delete(url).toPromise();
    }

    test_photos(): Promise<any> {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').toPromise();
    }
}
