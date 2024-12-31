import { Component } from '@angular/core';
import { Student } from 'src/app/Backoffice/Models/student';
import { UserService } from 'src/app/Backoffice/Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student: Student;
 
  constructor(private userService: UserService,private router: Router) { 
    // Initialisation avec des valeurs par défaut
    this.student = new Student('', '', '', '', '', new Date(), 0, ''); 
  }
  
  addStudent(): void {
    this.userService.addStudent(this.student).subscribe(data => {
      console.log('Student added:', data);
      this.student = new Student('', '', '', '', '', new Date(), 0, '');// Réinitialise l'objet student après l'ajout
      this.router.navigate(['admin/student_managment/list']);
    }, error => {
      console.error('Error adding student:', error);
    });
  }

  addStudents(students: Student[]): void {
    this.userService.addStudents(students).subscribe(data => {
      console.log('Students added:', data);
    }, error => {
      console.error('Error adding students:', error);
    });
  }
   
  
    
}
