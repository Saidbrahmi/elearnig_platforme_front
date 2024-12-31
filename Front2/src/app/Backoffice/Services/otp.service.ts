import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { OTP } from '../Models/OTP';

@Injectable({
  providedIn: 'root'
})
export class OTPService {

  private otpUrl = 'http://localhost:9092/api/auth';
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  generateOTP(): Observable<OTP> {
    return this.http.post<OTP>(`${this.otpUrl}/OTP/GenerateOTp`, {});
  }
  verifyOTP(identification: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.otpUrl}/OTP/VerifierOTP/${identification}`, {}).pipe(
      map(response => {
        if (response) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
  getOTPbyId(){}
  resendOTP(existingOTP: OTP): Observable<OTP> {
    return this.http.post<OTP>(`${this.otpUrl}/OTP/ResendOTP`, existingOTP);
  }
}
