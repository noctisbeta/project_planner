import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.css',
})
export class DashboardViewComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  async logout() {
    try {
      await this.authService.logout();
      console.log('Logged out successfully');
      this.router.navigate(['/auth']);
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
}
