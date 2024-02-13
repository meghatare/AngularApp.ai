import { Routes } from '@angular/router';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',
        component: SignInComponent,
    },
    {
        path:'otp-verification',
        component:OtpVerificationComponent,
    },
    {
        path:'login',
        component:LoginComponent
    }
];
