import { Routes } from '@angular/router';
import { AuthViewComponent } from './features/auth/views/auth-view/auth-view.component';
import { DashboardViewComponent } from './features/dashboard/views/dashboard-view/dashboard-view.component';

export const routes: Routes = [
  { path: 'auth', component: AuthViewComponent },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardViewComponent },
  { path: '**', redirectTo: 'auth' },
];
