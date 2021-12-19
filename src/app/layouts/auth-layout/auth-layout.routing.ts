import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { LogoutComponent } from '../../pages/logout/logout.component';
import { RegisterComponent } from '../../pages/register/register.component';

// import { AuthGuard } from '../../services/auth.guard';

export const AuthLayoutRoutes: Routes = [
    { path: '',          component: LoginComponent },
    { path: 'logout',       component: LogoutComponent },
    { path: 'register',       component: RegisterComponent }
];
