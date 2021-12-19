import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersAddComponent } from './users-add/users-add.component';
// import { UsersUploadComponent } from './users-upload/users-upload.component';

import { AuthGuard } from '../../services/auth.guard';

export const UsersRoutes: Routes = [
    { path: '',   component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'add',   component: UsersAddComponent, canActivate: [AuthGuard] },
    // { path: 'upload',   component: UsersUploadComponent, canActivate: [AuthGuard] }
];
