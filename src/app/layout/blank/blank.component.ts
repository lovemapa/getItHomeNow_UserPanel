import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonMethods } from 'src/app/utillpackage/common-method';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  Tag = "BlankComponent";
  showFooter = true;
  constructor(public router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 

        if (router.url == "/delivery") {
          this.showFooter = false;
          CommonMethods.showconsole(this.Tag, "working if ")
        } else {
          CommonMethods.showconsole(this.Tag, "working else ")
          this.showFooter = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }



}
