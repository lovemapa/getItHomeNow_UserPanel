import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { MyCookies } from 'src/app/utillpackage/utillpackage/my-cookies';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { MyRoutingMethods } from 'src/app/utillpackage/utillpackage/my-routing-methods';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { MyConstants } from 'src/app/utillpackage/constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Tag = "NavbarComponent";
  showAdvertisment = false;
  cookiesIsExit = false;
  profilepic: string;
  fullname:string;

  constructor(public router: Router, public location: Location, public cookiesService: CookieService,
    public userPanelBackEndService:UserpanelServiceService) {
    this.showAdvertisment = false;
    this.cookiesIsExit = false;
    // this.profilepic = "";
    this.fullname="";

    // console.log("Current Url:- "+this.router.url)

    if (this.router.url == "/home") {
      this.showAdvertisment = false
    } else {
      this.showAdvertisment = true
    }
   
    this.checkLoginStatus();

  }



  /* Check Login status  */
  checkLoginStatus() {
    this.setTopImage();
   
    var loginStatus = MyCookies.checkLoginStatus(this.cookiesService);
    CommonMethods.showconsole(this.Tag, "LoginStatus:- " + loginStatus);
    if (loginStatus) {
      this.setTopUserName();
      // this.profilepic = this.cookiesService.get("profilePic");
      this.cookiesIsExit = true;
    }
    else {
      this.cookiesIsExit = false;
    }
  }


  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(["/home"])
    window.scrollTo(0, 0)
  }

  /**Logout */
  clickLogoutFunction() {
    MyCookies.deletecookies(this.cookiesService);
    if (this.router.url == '/home') {
      location.reload(true);
    } else {
      MyRoutingMethods.gotoHome(this.router);
    }
    //  
  }


  /**Set Current Image */
  setTopImage(){
    this.userPanelBackEndService.currentProfilePic.subscribe(profilePicUrl => {
      this.profilepic = profilePicUrl;
       CommonMethods.showconsole(this.Tag,"profile Pic:- "+this.profilepic)
      if (profilePicUrl == '') {
        this.profilepic = MyCookies.getProfileIMage(this.cookiesService)
      }
      if (!this.profilepic) {
        this.profilepic = "./assets/imgs/default-admin.jpg";
      }
      else {
        this.profilepic = MyConstants.IMAGESERVERURL + this.profilepic;
      }
    });
  }


  /**Set UserName*/
  setTopUserName(){
    this.userPanelBackEndService.currentProfileName.subscribe(profileName => {
      this.fullname = profileName;
      if (profileName == '') {
        this.fullname = MyCookies.getUserFistName(this.cookiesService)+ " "+MyCookies.getUseLastName(this.cookiesService) 
      }
      // if (!this.profilepic) {
      //   this.profilepic = "./assets/imgs/default-admin.jpg";
      // }
      // else {
      //   this.profilepic = MyConstants.IMAGESERVERURL + this.profilepic;
      // }
    });

    // Authorization not correct?
  }

}
