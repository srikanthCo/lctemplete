import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserRegistrationService} from "../../services/user-registration.service";
import {UserLoginService} from "../../services/user-login.service";
import {CognitoCallback} from "../../services/cognito.service";

export class NewPasswordUser {
  username: string;
  existingPassword: string;
  password: string;
}

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit,CognitoCallback {

  registrationUser: NewPasswordUser;
  router: Router;
  errorMessage: string;

  constructor(public userRegistration: UserRegistrationService, public userService: UserLoginService, router: Router) {
      this.router = router;
      this.onInit();
  }

  onInit() {
      this.registrationUser = new NewPasswordUser();
      this.errorMessage = null;
  }

  ngOnInit() {
      this.errorMessage = null;
      console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
      this.userService.isAuthenticated(this);
  }

  onRegister() {
      console.log(this.registrationUser);
      this.errorMessage = null;
      this.userRegistration.newPassword(this.registrationUser, this);
  }

  cognitoCallback(message: string, result: any) {
      if (message != null) { //error
          this.errorMessage = message;
          console.log("result: " + this.errorMessage);
      } else { //success
          //move to the next step
          console.log("redirecting");
          this.router.navigate(['/']);
      }
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (isLoggedIn)
          this.router.navigate(['/']);
  }

}
