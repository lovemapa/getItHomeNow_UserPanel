import { Component, OnInit } from '@angular/core';
import { LoginSignupModal } from 'src/app/modalPackages/login_signup';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MyCookies } from 'src/app/utillpackage/utillpackage/my-cookies';
import { CookieService } from 'ngx-cookie-service';
import { MyRoutingMethods } from 'src/app/utillpackage/utillpackage/my-routing-methods';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  tag = "loginsignup";
  modalReference: NgbModalRef
  loginsignup: LoginSignupModal;
  signupForm = false;
  titlebelow = "";
  mainTitle = "";




  constructor(public snackbar: MatSnackBar, public modalService: NgbModal, public userPanelServices: UserpanelServiceService
  , public snackBar: MatSnackBar, public spinner: NgxSpinnerService,public cookiesService:CookieService,public router:Router) {
    this.loginsignup = new LoginSignupModal();
    this.signupForm = false;
    this.titlebelow = "Signup";
    this.mainTitle = "Login";
    this.checkLogin();
  
  }


  checkLogin(){
    var logincheck =MyCookies.checkLoginStatus(this.cookiesService)
    if(logincheck){
      MyRoutingMethods.gotoHome(this.router);
    } else{
      this.resetFields();
    }
  }

/**Reset All Fields */
  resetFields(){
  this.loginsignup.firstName="";
  this.loginsignup.lastName="";
  this.loginsignup.email="";
  this.loginsignup.contact="";
  this.loginsignup.password="";
  this.loginsignup.confirm_password="";
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
      this.spinner.show();
      this.userPanelServices.userLoginAPI(this.loginsignup).subscribe(responseData => {
        if (responseData.success) {
          this.spinner.hide();
          CommonMethods.showSuccessDialog(this.snackBar, responseData.message);
          MyRoutingMethods.gotoHome(this.router)
           CommonMethods.showconsole(this.tag,"Respinse:- "+JSON.stringify(responseData))
        } else {
          this.spinner.hide();
          CommonMethods.showErrorDialog(this.snackBar, responseData.message);
        }
      })
    }


  }
  /** Signup Validation call */
  signupValidation() {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.loginsignup.firstName.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter first name");
      return false;
    } else if (this.loginsignup.lastName.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter last name");
      return false;
    } else if (this.loginsignup.email.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter email");
      return false;
    } else if (!EMAIL_REGEXP.test(this.loginsignup.email.trim())) {
      CommonMethods.showErrorDialog(this.snackbar, "Email is invalid");
      return false;
    } else if (this.loginsignup.contact.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackbar, "Enter contact number");
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
    } else {
      return true;
    }

  }

  toggleButtonFunction() {

    if (this.signupForm == false) {
      this.titlebelow = "Login";
      this.mainTitle = "Signup";
      this.signupForm = true;
      this.resetFields();
    } else {
      this.titlebelow = "Signup";
      this.signupForm = false;
      this.mainTitle = "Login";
      this.resetFields();
    }
  }
  /**
        * 
        * Open  Modal Function 
        */
  openModal(content) {
    this.modalReference = this.modalService.open(content, { centered: true });
    //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
  }

  /**
   * 
   * close Modal Function 
   */
  JoinAndClose() {
    this.modalReference.close();
  }

  /**CallIng Modal Function */
  CallModalForm(content) {
    this.openModal(content)
  }



  /**Calling Signup Api */

  sigupServiceCall() {

    if (this.signupValidation()) {
      this.spinner.show();
      this.userPanelServices.signUp(this.loginsignup).subscribe(response => {

        CommonMethods.showconsole(this.tag, "Response:- " + JSON.stringify(response))
        if (response.success) {
          this.spinner.hide();
          CommonMethods.showSuccessDialog(this.snackBar, "Resgister Successfully");
          this.signupForm = false;
          this.resetFields();
        }
        else {
          this.spinner.hide();
          // this.noDataFound = true;
          CommonMethods.showErrorDialog(this.snackBar, response.message);
        }
      });
    }

  }

  keyPress(event: any) {
    const patt = /^[0-9]{1,4}(\.[0-9][0-9])?$/
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !patt.test(inputChar)) {
      event.preventDefault();
    }
  }


    /**
   * Sweet Alert   Show    
   */
  opensweetalert(message: any) {
    Swal.fire({
      text: message,
      icon: 'success'
    });
  }

  /**
   * method to send revocery mail on specific email
   * @param email email to send recovery link
   */
  forgetPassword(email:string){
    this.spinner.show();
    this.userPanelServices.forgotPassword(email).subscribe(response => {
      this.spinner.hide();
      this.JoinAndClose();
      if (response.success) {
        this.opensweetalert(response.message);
      }
      else {
        CommonMethods.showErrorDialog(this.snackBar, response.message);
      }
    });
  }
  


}
