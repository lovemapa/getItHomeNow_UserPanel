import { Component, OnInit } from '@angular/core';
import { LoginSignupModal } from 'src/app/modalPackages/login_signup';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  tag = "loginsignup";
  loginsignup: LoginSignupModal;
  signupForm = false;
  titlebelow = "";
  constructor(public snackbar: MatSnackBar) {
    this.loginsignup = new LoginSignupModal("", "", "", "", "", "", "");
    this.signupForm = true;
    this.titlebelow = "Signup"
  }
  /**
  * login Validation Function
  */
  loginValidation() {

    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.loginsignup.email.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter email");
      return false;
    } else if (!EMAIL_REGEXP.test(this.loginsignup.email.trim())) {
      CommonMethods.showErrorDialog(this.snackbar, "Email is invalid");
      return false;
    } else if (this.loginsignup.password.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter password");
      return false;
    } else {
      return true;
    }
  }
  /**End */

  ngOnInit(): void {
  }
  /** LoginAPI call */
  callLoginApi() {
    if (this.loginValidation()) {
      CommonMethods.showconsole(this.tag, "Working");
    }


  }
  /** Signup Validation call */
  signupValidation() {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.loginsignup.first_Name.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter first name");
      return false;
    } else if (this.loginsignup.last_Name.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter last name");
      return false;
    } else if (this.loginsignup.email.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter email");
      return false;
    } else if (!EMAIL_REGEXP.test(this.loginsignup.email.trim())) {
      CommonMethods.showErrorDialog(this.snackbar, "Email is invalid");
      return false;
    } else if (this.loginsignup.password.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter password");
      return false;
    } else if (this.loginsignup.confirm_password.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter Confirm password");
      return false;
    } else if (this.loginsignup.password.trim() != this.loginsignup.confirm_password.trim()) {
      CommonMethods.showErrorDialog(this.snackbar, "Password is not match");
      return false;
    }else {
      return true;
    }

  }

  toggleButtonFunction() {

    if (this.signupForm == false) {
      this.titlebelow = "Login";
      this.signupForm = true;
    } else {
      this.titlebelow = "Signup";
      this.signupForm = false;
    }
  }

}
