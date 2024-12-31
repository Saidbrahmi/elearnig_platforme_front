import { Component } from '@angular/core';
import { Student } from 'src/app/Backoffice/Models/student';
import { UserService } from 'src/app/Backoffice/Services/user.service';
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  student: Student[] = [];
  totalCommission?: number;
  search="";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.userService.getAllStudents().subscribe(data => {
      this.student = data;
    });
  }

  getStudentsByDate(dateInscrit: Date): void {
    this.userService.getStudentsByDate(dateInscrit).subscribe(data => {
      this.student = data;
    });
  }

  getTotalCommission(): void {
    this.userService.getTotalCommission().subscribe(data => {
      this.totalCommission = data;
    });
  }

  getStudentsBetweenDates(startDate: string, endDate: string): void {
    this.userService.getStudentsBetweenDates(startDate, endDate).subscribe(data => {
      this.student = data;
    });
  }
  removeStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.userService.deleteStudent(id).subscribe(() => {
        this.student = this.student.filter(stu => stu.id !== id);
        console.log('Student deleted');
      });
    }
  }

}
