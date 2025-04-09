import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-form',
  imports: [FormsModule],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  private authService: AuthService = inject(AuthService);
  private router = inject(Router);

  isLoginMode = true;
  email = '';
  password = '';

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  async onSubmit(): Promise<void> {
    let success: boolean = false;
    if (this.isLoginMode) {
      try {
        await this.authService.login(this.email, this.password);
        console.log('Login successful');
        success = true;
      } catch (error) {
        console.error('Login failed', error);
      }
    } else {
      try {
        await this.authService.register(this.email, this.password);
        console.log('Registration successful');
        success = true;
      } catch (error) {
        console.error('Registration failed', error);
      }
    }
    if (success) {
      console.log('Navigating to dashboard...');
      this.router.navigate(['/dashboard']);
    }
  }
}
