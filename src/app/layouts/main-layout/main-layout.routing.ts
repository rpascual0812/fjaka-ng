import { Routes } from '@angular/router';

export const MainLayoutRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'scholars',
        loadChildren: () => import('../../pages/users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('../../pages/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('../../pages/settings/settings.module').then(m => m.SettingsModule)
    },
];
