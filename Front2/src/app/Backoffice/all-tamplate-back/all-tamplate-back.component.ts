import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-all-tamplate-back',
  templateUrl: './all-tamplate-back.component.html',
  styleUrls: ['./all-tamplate-back.component.css']
})
export class AllTamplateBackComponent {

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.performLogout();
  }


 
}
