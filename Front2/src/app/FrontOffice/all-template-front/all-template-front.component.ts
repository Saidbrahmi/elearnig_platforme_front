import { Component } from '@angular/core';
import { AuthService } from 'src/app/Backoffice/Services/auth.service';
@Component({
  selector: 'app-all-template-front',
  templateUrl: './all-template-front.component.html',
  styleUrls: ['./all-template-front.component.css']
})
export class AllTemplateFrontComponent {

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.performLogout();
  }

}
