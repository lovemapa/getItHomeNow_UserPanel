import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { AdvertisementModel } from 'src/app/modalPackages/advertisement';

@Component({
  selector: 'app-advertisments',
  templateUrl: './advertisments.component.html',
  styleUrls: ['./advertisments.component.css']
})
export class AdvertismentsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
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
  public searchString: string = "";
  public noDataFound: boolean = false;
  public adsList: Array<AdvertisementModel> = [];
  public showTable = false;


  constructor(public router: Router, public userpanelServiceService: UserpanelServiceService, public modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAdvertisment();
  }



  /**GEt AdverTisMEnt List */
  getAdvertisment(searchTerm?: string) {
    if (searchTerm || searchTerm == '') {
      this.searchString = searchTerm;
    }
    this.userpanelServiceService.getAdvertisement(this.searchString).subscribe(response => {
      if (response.success) {
        this.adsList = response.data;
        this.showTable = true;
        if (this.adsList.length == 0) {
          this.showTable = false;
        }
      }
      else {
        this.noDataFound = true;
      }
    });
  }

  createContent(content: string): Array<string> {
    let contentArray: Array<string> = content.split("%");
    return contentArray;
  }
}
