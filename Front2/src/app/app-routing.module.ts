import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTamplateBackComponent } from './Backoffice/all-tamplate-back/all-tamplate-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { LoginComponent } from './Backoffice/Back_Managment/login/login.component';
import { RegisterComponent } from './Backoffice/Back_Managment/register/register.component';
import { Role } from 'src/_helpers/role';
import { RoleGuard } from './Backoffice/Services/Roleguard';
import { ForgetpassloginComponent } from './Backoffice/Back_Managment/forgetpasslogin/forgetpasslogin.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
 { path: "", redirectTo: "login", pathMatch: "full" },
 { path: 'forgetpassword', component: ForgetpassloginComponent },
  { path: "all-template-front", component: AllTemplateFrontComponent },
  // Redirection pour les routes non définies
    
    
 



  
  {
    path: 'admin',
    component: AllTamplateBackComponent,
    canActivate: [RoleGuard], // Garde pour protéger l'accès global à cette section
    data: { role: 'ROLE_ADMIN' },
    children: [
      {
        path: 'student_managment',
        loadChildren: () => import('./Backoffice/Back_Managment/student-managment/student-managment.module').then(m => m.StudentManagmentModule),
        canActivate: [RoleGuard],
        data: { role: 'ROLE_ADMIN' } 
      },
      {
  path: 'pre_seller_managment',
  loadChildren: () => import('./Backoffice/Back_Managment/pre-seller-managment/pre-seller-managment.module').then(m => m.PreSellerManagmentModule),
  canActivate: [RoleGuard],
  data: { roles: ['ROLE_PRE_SELLER', 'ROLE_ADMIN'] } // Utilisez un tableau pour plusieurs rôles
}

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
