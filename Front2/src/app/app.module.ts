import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTamplateBackComponent } from './Backoffice/all-tamplate-back/all-tamplate-back.component'; 
import { AddStudentComponent } from './Backoffice/Back_Managment/student-managment/add-student/add-student.component';
import { ListStudentComponent } from './Backoffice/Back_Managment/student-managment/list-student/list-student.component';
import { UpdatStudentComponent } from './Backoffice/Back_Managment/student-managment/updat-student/updat-student.component';
import { AddPreSellerComponent } from './Backoffice/Back_Managment/pre-seller-managment/add-pre-seller/add-pre-seller.component';
import { ListPreSellerComponent } from './Backoffice/Back_Managment/pre-seller-managment/list-pre-seller/list-pre-seller.component';
import { UpdatPreSellerComponent } from './Backoffice/Back_Managment/pre-seller-managment/updat-pre-seller/updat-pre-seller.component';
import { PreSellerManagmentRoutingModule } from './Backoffice/Back_Managment/pre-seller-managment/pre-seller-managment-routing.module';
import { StudentManagmentRoutingModule } from './Backoffice/Back_Managment/student-managment/student-managment-routing.module';
import { LoginComponent } from './Backoffice/Back_Managment/login/login.component';
import { RegisterComponent } from './Backoffice/Back_Managment/register/register.component';
import { ProfileComponent } from './Backoffice/Back_Managment/profile/profile.component';
import { BoardAdminComponent } from './Backoffice/Back_Managment/board-admin/board-admin.component';
import { BoardPreSellerComponent } from './Backoffice/Back_Managment/board-pre-seller/board-pre-seller.component';
import { BoardUserComponent } from './Backoffice/Back_Managment/board-user/board-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetpassloginComponent } from './Backoffice/Back_Managment/forgetpasslogin/forgetpasslogin.component';
import { NgOtpInputModule } from "ng-otp-input";
@NgModule({
  declarations: [
    AppComponent,
    AllTemplateFrontComponent,
    AllTamplateBackComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardPreSellerComponent,
    BoardUserComponent,
    ForgetpassloginComponent,
   
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PreSellerManagmentRoutingModule,
    StudentManagmentRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgOtpInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
