import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  userName:string='';
  userEmail:string='';
  userContactNo:string='';
  userMessage:string='';

  constructor(public snackBar: MatSnackBar,public router: Router, public userpanelServiceService: UserpanelServiceService, public modalService: NgbModal,
    public spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  /**
   * method to send contact us detail to admin via mail.
   */
  sendDetails(){
    let contactUsDetails:any={
      name:this.userName,
      email:this.userEmail,
      contact:this.userContactNo,
      message:this.userMessage
    }
    this.userpanelServiceService.contactUs(contactUsDetails).subscribe(res => {
      if(res.success){
        this.resetFields();
        CommonMethods.showSuccessDialog(this.snackBar,res.message);
      }
      else{
        CommonMethods.showErrorDialog(this.snackBar,res.message);
      }
    });
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
}
