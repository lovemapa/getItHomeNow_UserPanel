import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   showAdvertisment=false;
  constructor(public router:Router,public location:Location) {
    this.showAdvertisment=false
     
      // console.log("Current Url:- "+this.router.url)

       if(this.router.url == "/promotions")
       {
        this.showAdvertisment=true
       }else{
        this.showAdvertisment=false
       }


   }

  ngOnInit(): void {
  }

  goBack(){
       this.location.back();
       window.scrollTo(0, 0)
      }

}
