import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

import { AuthGuard } from '../../services/auth.guard';

export const ProfileRoutes: Routes = [
    { path: '',   component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'edit',   component: ProfileComponent, canActivate: [AuthGuard] }
];
