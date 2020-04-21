import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  userName: string = '';
  userEmail: string = '';
  userContactNo: string = '';
  userMessage: string = '';

  constructor(public snackBar: MatSnackBar, public router: Router, public userpanelServiceService: UserpanelServiceService, public modalService: NgbModal,
    public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


  /**
   * Validation Contact Us 
   */
  validation() {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.userName.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackBar, " Enter user name ");
      return false;
    } else if (this.userEmail.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackBar, " Enter email address ");
      return false;
    }else if (!EMAIL_REGEXP.test(this.userEmail.trim())) {
      CommonMethods.showErrorDialog(this.snackBar, "Email is invalid");
      return false;
    }  else if (this.userContactNo.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackBar, " Enter  contact number ");
      return false;
    } else if (this.userMessage.trim().length == 0) {
      CommonMethods.showErrorDialog(this.snackBar, " Enter  message ");
      return false;
    } else {
      return true;
    }
  }

  /**
   * method to send contact us detail to admin via mail.
   */
  sendDetails() {
    if(this.validation())
    {
      this.spinner.show()
      let contactUsDetails: any = {
        name: this.userName,
        email: this.userEmail,
        contact: this.userContactNo,
        message: this.userMessage
      }
      this.userpanelServiceService.contactUs(contactUsDetails).subscribe(res => {
        if (res.success) {
          this.spinner.hide()
          this.resetFields();
          // CommonMethods.showSuccessDialog(this.snackBar, res.message);
          this.opensweetalert(res.message)
        }
        else {
          CommonMethods.showErrorDialog(this.snackBar, res.message);
        }
      });
    }
   
  }

  /**
   * method to reset all details
   */
  resetFields() {
    this.userName = '';
    this.userEmail = '';
    this.userContactNo = '';
    this.userMessage = '';
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
 * 
 *   Numarical Number only Press
 */
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


}
