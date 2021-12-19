import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
            if(localStorage.o__token) {
                const { exp } = jwt_decode(localStorage.o__token);

                if(localStorage.o__token && Date.now() > (exp * 1000)) {
                    this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
                    return false;
                }

                return true;
            }
            else {
                this.router.navigate(['/auth'], { queryParams: { returnUrl: state.url } });
                return false;
            }
        }

    }
