import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';
const API_URL = 'http://localhost:9092/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  /*getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }*/
  
  getPre_sellerBoard(): Observable<any> {
    return this.http.get(API_URL + 'pre_seller', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  private baseUrl = 'http://localhost:9092/api/User';

  

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/add`, student);
  }

  addStudents(students: Student[]): Observable<Student[]> {
    return this.http.post<Student[]>(`${this.baseUrl}/addBatch`, students);
  }

 /* updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/update`, student);
  }*/
    updateStudent(student: Student): Observable<Student> {
      const token = localStorage.getItem('authToken'); // Récupérez le jeton JWT du stockage local ou d'un autre endroit
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
      return this.http.put<Student>(`${this.baseUrl}/update`, student, { headers });
    }
  

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/get/${id}`);
  }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/all`);
  }

  getStudentsByDate(dateInscrit: Date): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/byDate`, {
      params: { dateInscrit: dateInscrit.toISOString().split('T')[0] }
    });
  }

  getTotalCommission(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/total`);
  }

  getStudentsBetweenDates(startDate: string, endDate: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/studentsDate`, {
      params: {
        startDate: startDate,
        endDate: endDate
      }
    });

  
    
  }
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/remove/${id}`);
  };

}