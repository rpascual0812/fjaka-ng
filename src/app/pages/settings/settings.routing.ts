import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

import { AuthGuard } from '../../services/auth.guard';

export const SettingsRoutes: Routes = [
    { path: '',   component: SettingsComponent, canActivate: [AuthGuard] }
];
