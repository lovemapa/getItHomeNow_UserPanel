import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  
  constructor() { }

  ngOnInit(): void {
  }

  toTop(event) {
    //  CommonMethods.showLog(this.Tag,'Page Offset : '+window.pageYOffset)
    //  CommonMethods.showLog(this.Tag,'Page Offset : '+window.innerHeight)
    
       var  nav = $('nav')
        , nav_height = nav.outerHeight();
        $('html, body').animate({
          scrollTop: $('#advertisments').offset().top - nav_height+45
         
        },0);
   
      
    }
}
