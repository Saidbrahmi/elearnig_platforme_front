import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:9092/api/auth/';

/*const logoutUrl = 'http://localhost:9092/api/auth/signout';*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
private baseUrl = 'http://localhost:9092/api/User/';

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
        
      },
      
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

 /* logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }*/

    // Method to log out the user
  logout(): Observable<any> {
    return this.http.post( AUTH_API + 'signout', {});
  }
 
  userForgetPassword(email: any) {
    return this.http.post(`${this.baseUrl}forgetpassword/${email}`,email);
  }
  
 
  // Handle the logout process
  performLogout() {
    this.logout().subscribe({
      next: () => {
        localStorage.removeItem('authToken'); // Remove the JWT token from local storage
        this.router.navigate(['/login']); // Redirect to login page
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    });
  }
  forgetPasswordbyemail(email: string, resetPass: any): Observable<any> {
    return this.http.put(
      `${this.baseUrl}forgetpassbyemail/${email}`,
      resetPass,
      httpOptions
    );
  }
}