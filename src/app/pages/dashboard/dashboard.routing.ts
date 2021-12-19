import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../../services/auth.guard';

export const DashboardRoutes: Routes = [
    { path: '',   component: DashboardComponent, canActivate: [AuthGuard] }
];
