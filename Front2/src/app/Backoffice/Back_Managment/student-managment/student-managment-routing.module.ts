import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdatStudentComponent } from './updat-student/updat-student.component';
const routes: Routes = [
  { path: 'list', component: ListStudentComponent },
  {
    path :"",
    redirectTo:"ListStudent",
    pathMatch:"full"
  },

  { path: 'add-student', component: AddStudentComponent },
  { path: 'update-student/:id', component: UpdatStudentComponent }
  // Vous pouvez ajouter d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class StudentManagmentRoutingModule { }
