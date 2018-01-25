import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from "../../services/user-registration.service";
import {CognitoCallback} from "../../services/cognito.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resend-code',
  templateUrl: './resend-code.component.html',
  styleUrls: ['./resend-code.component.css']
})
export class ResendCodeComponent implements CognitoCallback {

  email: string;
  errorMessage: string;

  constructor(public registrationService: UserRegistrationService, public router: Router) {

  }

  resendCode() {
      this.registrationService.resendCode(this.email, this);
  }

  cognitoCallback(error: any, result: any) {
      if (error != null) {
          this.errorMessage = "Something went wrong...please try again";
      } else {
          this.router.navigate(['/home/confirmRegistration', this.email]);
      }
  }

}