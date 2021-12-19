import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes =[
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    }, {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/main-layout/main-layout.module#MainLayoutModule'
            }
        ]
    }, {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }, {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },

];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{
            useHash: false
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
