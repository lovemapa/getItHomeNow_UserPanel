import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-advertisments',
  templateUrl: './advertisments.component.html',
  styleUrls: ['./advertisments.component.css']
})
export class AdvertismentsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      250: {
        items: 1
      },
      576: {
        items: 2
      },
      767: {
        items: 3
      },
      991: {
        items: 3
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
