import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { OtpVerificationComponent } from '../otp-verification/otp-verification.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HeaderComponent,OtpVerificationComponent,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

}
