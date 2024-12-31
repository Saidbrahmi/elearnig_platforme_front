import { Component } from '@angular/core';
import { Student } from 'src/app/Backoffice/Models/student';
import { UserService } from 'src/app/Backoffice/Services/user.service';
import {  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-updat-student',
  templateUrl: './updat-student.component.html',
  styleUrls: ['./updat-student.component.css']
})
export class UpdatStudentComponent implements OnInit {
  student: Student = new Student('', '', '', '', '', new Date(), 0, '');
  statusOptions: string[] = ['ENROLLED', 'INTERESTED', 'Not_INTERESTED'];
 // Exemple de valeurs pour le statut

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getStudent(id).subscribe(data => {
      this.student = data;
    });
  }

  updateStudent(): void {
    this.userService.updateStudent(this.student).subscribe(data => {
      console.log('Student updated:', data);
      this.router.navigate(['admin/student_managment/list']);
    });
  }
}