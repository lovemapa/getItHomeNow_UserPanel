import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonMethods } from 'src/app/utillpackage/common-method';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  Tag="BlankComponent";
  showFooter=true;
  constructor(public router:Router) {

     CommonMethods.showconsole(this.Tag,"SHow Current Url :- "+router.url)
       if( router.url == "/delivery")
       {
        this.showFooter=false;
       }else{
         this.showFooter=true;
       }
   }

  ngOnInit(): void {
  }



}
