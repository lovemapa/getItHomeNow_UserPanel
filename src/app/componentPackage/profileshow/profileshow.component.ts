import { Component, OnInit } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';
import { MyCookies } from 'src/app/utillpackage/utillpackage/my-cookies';
import { LoginSignupModal } from 'src/app/modalPackages/login_signup';
import { CommonMethods } from 'src/app/utillpackage/common-method';

import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { MyConstants } from 'src/app/utillpackage/constant';
import { MyRoutingMethods } from 'src/app/utillpackage/utillpackage/my-routing-methods';
@Component({
  selector: 'app-profileshow',
  templateUrl: './profileshow.component.html',
  styleUrls: ['./profileshow.component.css']
})
export class ProfileshowComponent implements OnInit {


  Tag = "ProfileshowComponent";
  imageurl: any;
  modalReference: NgbModalRef;
  selectedImageUrl: File;
  public oldPwd: string;
  userDetailsModal: LoginSignupModal;
  userName: string;
  address: string;
  errorMessage: string;
  modalTitle:string;
  showCompleteProfileButton = false;
  constructor(public modalService: NgbModal, public snackBar: MatSnackBar, public router: Router,
    public cookiesService: CookieService, public spiner: NgxSpinnerService, public userBackEndServices: UserpanelServiceService) {
    this.userDetailsModal = new LoginSignupModal();
    this.userName = "";
    this.address = "";
    this.errorMessage = "";
    this.oldPwd="";
    this.modalTitle="";
    this.showCompleteProfileButton = false;
    this.resetVeriable();
    this.checkLogin();
  }

  ngOnInit(): void {
  }



  /**
   * Initalize variable
   */

  resetVeriable() {
    this.userDetailsModal.firstName = "";
    this.userDetailsModal.lastName = "";
    this.userDetailsModal.email = "";
    this.userDetailsModal.contact = "";
    this.userDetailsModal.password = "";
    this.userDetailsModal.address = "";
    this.userDetailsModal.city = "";
    this.userDetailsModal.state = "";
    this.userDetailsModal.zip = "";
    this.userDetailsModal.confirm_password = "";
  }

  checkLogin() {
    var logincheck = MyCookies.checkLoginStatus(this.cookiesService)
    if (logincheck) {
      this.setShowuserData();
      this.setImage();
    } else {
      MyRoutingMethods.gotoHome(this.router)
    }
  }


  setImage() {
    this.userDetailsModal.profilePic = this.cookiesService.get('profilePic');
    if (!this.userDetailsModal.profilePic) {
      this.userDetailsModal.profilePic = "./assets/imgs/default-admin.jpg";
    }
    else {
      this.userDetailsModal.profilePic = MyConstants.IMAGESERVERURL + this.userDetailsModal.profilePic;
    }
  }

  /**Set Show Data Into Personal Deatils */

  setShowuserData() {
    this.userName = MyCookies.getUserFistName(this.cookiesService) + " " + MyCookies.getUseLastName(this.cookiesService);
    this.userDetailsModal.email = MyCookies.getEmaild(this.cookiesService);
    this.userDetailsModal.contact = MyCookies.getUsercontact(this.cookiesService);
     CommonMethods.showconsole(this.Tag,"Show User Panel :- "+MyCookies.getUserAddress(this.cookiesService))
    if (MyCookies.getUserAddress(this.cookiesService) != "undefined"
      && MyCookies.getUsercity(this.cookiesService) != "undefined"
      && MyCookies.getUserstate(this.cookiesService) != "undefined"
      && MyCookies.getUserzip(this.cookiesService) != "undefined"
    ) {
      CommonMethods.showconsole(this.Tag, "else is working");
      this.address = MyCookies.getUserAddress(this.cookiesService) + " "
        + " " + MyCookies.getUsercity(this.cookiesService)
        + " " + MyCookies.getUserstate(this.cookiesService)
        + " " + MyCookies.getUserzip(this.cookiesService)
      this.showCompleteProfileButton = true;
    } else {
      CommonMethods.showconsole(this.Tag, "If is working");
      this.address = "Nil";
      this.showCompleteProfileButton = false;
     
    }


  }





  /**Image Selection Code */

  onSelectFile(event) {

    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (innerEvent) => {
        this.imageurl = (<FileReader>innerEvent.target).result;

        this.selectedImageUrl = event.target.files[0];
        const adminDetails: FormData = new FormData();
        adminDetails.append('profilePic', this.selectedImageUrl, this.selectedImageUrl.name);
        this.updateUsersDetails(adminDetails);
      }
    }
  }


  /**
     * method to update admin details
     * @param userDetails updated admin details object
     */
  updateUsersDetails(userDetails: any) {
    this.spiner.show();
    this.userBackEndServices.updateDetails(userDetails).subscribe(response => {
      this.spiner.hide();
      if (response.success) {
        this.userBackEndServices.setCurrentProfilePic(this.cookiesService.get('profilePic'));
        this.setImage();
        CommonMethods.opensweetalert(response.message)
      }
      else {
        this.spiner.hide();
          if (response.message == "Authorization not correct") {

            MyCookies.deletecookies(this.cookiesService)
            MyRoutingMethods.gotoHome(this.router);
            CommonMethods.opensweetalertError(response.message)
          } else {
            CommonMethods.opensweetalertError(response.message)
          }
      }
    });
  }

  /**
         * 
         * Open  Modal Function 
         */
  openModal(content) {
    this.modalReference = this.modalService.open(content, { centered: true });
    //  this.modalReference.componentInstance.actionMessage = this.actionmessage;
  }

  /**
   * 
   * close Modal Function 
   */
  JoinAndClose() {
    this.modalReference.close();
  }





  /**Numarical Enter Code Only */

  keyPress(event: any) {
    const patt = /^[0-9]{1,4}(\.[0-9][0-9])?$/
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !patt.test(inputChar)) {
      event.preventDefault();
    }
  }


  /**Set MOdal Data Edit */

  setModalUserData() {
    this.errorMessage = "";
    this.userDetailsModal.firstName = MyCookies.getUserFistName(this.cookiesService);
    this.userDetailsModal.lastName = MyCookies.getUseLastName(this.cookiesService);
    this.userDetailsModal.contact = MyCookies.getUsercontact(this.cookiesService);

    if (MyCookies.getUserAddress(this.cookiesService) == "undefined"
      || MyCookies.getUsercity(this.cookiesService) == "undefined"
      || MyCookies.getUserstate(this.cookiesService) == "undefined"
      || MyCookies.getUserzip(this.cookiesService) == "undefined"
    ) {
      this.userDetailsModal.address = "";
      this.userDetailsModal.city = "";
      this.userDetailsModal.state = "";
      this.userDetailsModal.zip = "";
    } else {
      this.userDetailsModal.address = MyCookies.getUserAddress(this.cookiesService);
      this.userDetailsModal.city = MyCookies.getUsercity(this.cookiesService);
      this.userDetailsModal.state = MyCookies.getUserstate(this.cookiesService);
      this.userDetailsModal.zip = MyCookies.getUserzip(this.cookiesService);
    }
  }

  /**Open Edit MOdal  */


  showUpdateProfileMOdal(content,modalTitleString:string) {
    this.modalTitle=modalTitleString;
    this.setModalUserData();
    this.openModal(content);
  }

  /**
   * Validation Forms Edit And Complete Profile
   */
  validationProfile() {
    // var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.userDetailsModal.firstName.trim().length == 0) {
      this.errorMessage = "Enter first name";
      return false;
    } else if (this.userDetailsModal.lastName.trim().length == 0) {
      this.errorMessage = "Enter last name";
      return false;
    } 
    // else if (this.userDetailsModal.email.trim().length == 0) {
    //   this.errorMessage = "Enter email";
    //   return false;
    // } else if (!EMAIL_REGEXP.test(this.userDetailsModal.email.trim())) {
    //   this.errorMessage = "Email is invalid";
    //   return false;
    // } 
    else if (this.userDetailsModal.contact.trim().length == 0) {
      this.errorMessage = "Enter contact number";
      return false;
    } else if (this.userDetailsModal.address.trim().length == 0) {
      this.errorMessage = "Enter address";
      return false;
    } else if (this.userDetailsModal.city.trim().length == 0) {
      this.errorMessage = "Enter City";
      return false;
    } else if (this.userDetailsModal.state.trim().length == 0) {
      this.errorMessage = "Enter state";
      return false;
    } else if (this.userDetailsModal.zip.trim().length == 0) {
      this.errorMessage = "Enter zip code";
      return false;
    } else {
      this.errorMessage = "";
      return true;
    }
  }

  /**Update USer Profile */
  updateUserDeatils() {
    CommonMethods.showconsole(this.Tag, "Working")
    if (this.validationProfile()) {
      let userdata: any = {};
      userdata.firstName = this.userDetailsModal.firstName;
      userdata.lastName = this.userDetailsModal.lastName;
      // userdata.email = this.userDetailsModal.email;
      userdata.contact = this.userDetailsModal.contact;
      userdata.address = this.userDetailsModal.address;
      userdata.city = this.userDetailsModal.city;
      userdata.state = this.userDetailsModal.state;
      userdata.zip = this.userDetailsModal.zip;
      this.spiner.show();
      this.userBackEndServices.updateDetails(userdata).subscribe(response => {
        this.spiner.hide();
        if (response.success) {
          this.JoinAndClose();
          var profilename=MyCookies.getUserFistName(this.cookiesService)+" "+MyCookies.getUseLastName(this.cookiesService);
          this.userBackEndServices.setCurrentProfileName(profilename);
          CommonMethods.opensweetalert(response.message)
          this.setShowuserData();
        }
        else {
          this.spiner.hide();
          this.JoinAndClose();
          if (response.message == "Authorization not correct") {

            MyCookies.deletecookies(this.cookiesService)
            MyRoutingMethods.gotoHome(this.router);
            CommonMethods.opensweetalertError(response.message)
          } else {
            CommonMethods.opensweetalertError(response.message)
          }

        }
      });
    }
  }
  /**
          * 
          * Open Change Password  Modal Function 
          */
  openChangePasswordModal(changePasswordModal) {
    this.modalReference = this.modalService.open(changePasswordModal, { centered: true });
    //  this.modalReference.componentInstance.actionMessage = this.actionmessage;
  }

  changePassword(changePasswordModal) {
    this.openChangePasswordModal(changePasswordModal);
  }

/**Validationchange Password Password */

validationChangePassword(){
  if (this.oldPwd.trim().toString() == '') {
    this.errorMessage = "old Password field can't be empty.";
    return false;
  }
  if (this.userDetailsModal.password.trim().toString() == '') {
    this.errorMessage = "New Password field can't be empty.";
    return false;
  }
  if (this.userDetailsModal.confirm_password.trim().toString() == '') {
    this.errorMessage = "Confirm Password field can't be empty.";
    return false;
  }
  else if(this.userDetailsModal.password.toUpperCase() == this.oldPwd.toUpperCase()){
    this.errorMessage = "New Password can't be same as Old Password";
     return false;
  }
  else if(this.userDetailsModal.password.toUpperCase() != this.userDetailsModal.confirm_password.toUpperCase()){
    this.errorMessage = "Oops, New Password & Confirm Password are not same";
     return false;
  }
  else{
     this.errorMessage=""
     return true
  }
}


  /**Change Password */

  updatePassword() {
    if (this.validationChangePassword()) {
      this.spiner.show();
      let userDetails: any = {};
      userDetails.password = this.userDetailsModal.password;
      userDetails.oldPassword = this.oldPwd;
      this.userBackEndServices.updateDetails(userDetails).subscribe(response => {
        this.JoinAndClose();
        if (response.success) {
          this.spiner.hide();
          MyCookies.deletecookies(this.cookiesService);
          MyRoutingMethods.gotoHome(this.router);
          CommonMethods.opensweetalert(response.message + " please Login Again");
        }
        else {
          this.spiner.hide();
          this.JoinAndClose();
          if (response.message == "Authorization not correct") {

            MyCookies.deletecookies(this.cookiesService)
            MyRoutingMethods.gotoHome(this.router);
            CommonMethods.opensweetalertError(response.message)
          } else {
            this.errorMessage=response.message;
            // CommonMethods.opensweetalertError(response.message)
          }
        }
      });
    } 

  }



  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
  _keyPresscharacter(event: any) {
    const pattern = /^[a-zA-Z\s]*$/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }

}
