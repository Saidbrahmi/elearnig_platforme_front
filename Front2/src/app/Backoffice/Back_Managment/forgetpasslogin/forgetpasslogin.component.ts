import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { OTPService } from '../../Services/otp.service';

@Component({
  selector: 'app-forgetpasslogin',
  templateUrl: './forgetpasslogin.component.html',
  styleUrls: ['./forgetpasslogin.component.css']
})
export class ForgetpassloginComponent  implements OnInit {
  
  token: string | undefined;
  fg!: FormGroup;
fgreset!: FormGroup;
  showResetPasswordCard: boolean = false;

  constructor(private authService: AuthService, private router: Router,private otpservice :OTPService) {
    this.token = undefined;}

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }

    return null;
  }
  ngOnInit(): void {
    this.fg = new FormGroup({
      email: new FormControl('', [Validators.required]),
      //recaptcha: new FormControl(null, [Validators.required])
    });
    this.fgreset = new FormGroup({
      code: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, this.passwordMatchValidator);

  }
  public submitfg(): void {

    if (this.fg.valid) {
        // Encodage de l'email
        const email = encodeURIComponent(this.fg.value.email);

        this.authService.userForgetPassword(email).subscribe(
            (response) => {
                this.showResetPasswordCard = true;
                alert("Code envoyé avec succès à votre email");
            },
            (error) => {
                // Affichage de l'erreur complète dans la console
                console.error("Erreur lors de l'envoi de l'OTP : ", error);

                // Gestion de l'erreur avec un message plus détaillé
                alert("Erreur lors de l'envoi du code, veuillez réessayer.");
            }
        );
    } else {
        alert("Le formulaire est invalide, veuillez vérifier l'email.");
    }
}
  public submitfgreset(): void {
    if(this.fgreset.valid){

      const formData = {
        newPassword: this.fgreset.value.newPassword,
        code: this.fgreset.value.code,
      };
      this.authService.forgetPasswordbyemail(this.fg.value.email, formData).subscribe( (response) => {
          alert ("password changed successfully")
          this.router.navigate(['/login']);
        },

        error => alert ("error while changing password"))


    }
    else{
      alert("form invalid");

    }

  }

  resendcode($event: any) {
    $event.preventDefault();
    this.submitfg();
  }



 


}