import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { OtpVerificationComponent } from '../otp-verification/otp-verification.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [HeaderComponent,RouterLink,OtpVerificationComponent,FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  loginObj: Login;
  http = inject(HttpClient);

  constructor() {
    this.loginObj = new Login();
  }
 
  onLogin() {
    debugger;
    this.http.post('https://api.laborbus.com/api/lbuser/signup', this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("SignUp Successfully");
      }else{
        alert(res.message)
      }
    })
  }

}

export class Login {
  mobileNumber: string;
  password: string;
  constructor() {
    this.mobileNumber ='';
    this.password = '';
  }
}
