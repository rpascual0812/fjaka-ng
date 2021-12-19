import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import * as moment from "moment";

// import { AuthenticationService } from './authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        // private authenticationService: AuthenticationService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.o__token;

        if(token) {
            const { exp } = jwt_decode(token);
            console.log('user session will expire on', moment(exp * 1000).format("MMM DD, YYYY hh:mm:ss a"));

            if(token && Date.now() < (exp * 1000)) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });

                return next.handle(request);
            }
            // else if(localStorage.o__token && Date.now() > (exp * 1000)) {
            //     this.authenticationService.refresh()
            //     .then((data:any) => {
            //         console.log(3, request);
            //         console.log('updated...');
            //         this.authenticationService.setSession(data);
            //
            //         request = request.clone({
            //             setHeaders: {
            //                 Authorization: `Bearer ${token}`
            //             }
            //         });
            //
            //         return next.handle(request);
            //     })
            //     .catch((err:any) => {
            //         console.log(4, request);
            //         return next.handle(request);
            //     });
            // }
            else {
                return next.handle(request);
            }
        }
        else {
            return next.handle(request);
        }
    }
}
