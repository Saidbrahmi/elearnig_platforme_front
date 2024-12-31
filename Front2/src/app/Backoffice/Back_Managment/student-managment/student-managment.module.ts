import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagmentRoutingModule } from './student-managment-routing.module';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdatStudentComponent } from './updat-student/updat-student.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';







@NgModule({
  declarations: [
    AddStudentComponent,
    ListStudentComponent,
    UpdatStudentComponent
  ],
  imports: [
    CommonModule,
    StudentManagmentRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
  
    

  ]
})
export class StudentManagmentModule { }
