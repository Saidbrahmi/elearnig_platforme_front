import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../Services/storage.service';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any = {
    username: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router, private storageService: StorageService) {}

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.roles = this.storageService.getUserRole().split(',');

        // Redirection en fonction du rôle
        if (this.roles.includes('ROLE_STUDENT')) {
          this.router.navigate(['/all-template-front']);
        } else if (this.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/all-template-front']); // Default redirection
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;

        // Si le rôle de l'utilisateur est ROLE_STUDENT même en cas d'échec, redirection vers all-template-front
        const userRole = this.storageService.getUserRole();
        if (userRole === 'ROLE_STUDENT') {
          this.router.navigate(['/all-template-front']);
        }
      }
    });
  }
}