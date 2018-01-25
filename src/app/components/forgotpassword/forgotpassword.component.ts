import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserLoginService} from "../../services/user-login.service";
import {CognitoCallback} from "../../services/cognito.service";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements CognitoCallback {

  email: string;
    errorMessage: string;

    constructor(public router: Router,
                public userService: UserLoginService) {
        this.errorMessage = null;
    }

    onNext() {
        this.errorMessage = null;
        this.userService.forgotPassword(this.email, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message == null && result == null) { //error
            this.router.navigate(['/forgotPassword', this.email]);
        } else { //success
            this.errorMessage = message;
        }
    }

}

@Component({
  selector: 'app-forgotpassword2',
  templateUrl: './forgotpassword2.component.html'
})
export class Forgotpassword2Component implements OnInit {

  verificationCode: string;
  email: string;
  password: string;
  errorMessage: string;
  private sub: any;

  constructor(public router: Router, public route: ActivatedRoute,
              public userService: UserLoginService) {
      console.log("email from the url: " + this.email);
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.email = params['email'];

      });
      this.errorMessage = null;
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  onNext() {
      this.errorMessage = null;
      this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
  }

  cognitoCallback(message: string) {
      if (message != null) { //error
          this.errorMessage = message;
          console.log("result: " + this.errorMessage);
      } else { //success
          this.router.navigate(['/login']);
      }
  }

}
