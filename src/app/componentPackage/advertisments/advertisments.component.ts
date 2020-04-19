import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { AdvertisementModel } from 'src/app/modalPackages/advertisement';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-advertisments',
  templateUrl: './advertisments.component.html',
  styleUrls: ['./advertisments.component.css']
})
export class AdvertismentsComponent implements OnInit {
 
  public searchString: string = "";
  public noDataFound: boolean = false;
  public adsList: Array<AdvertisementModel> = [];
  public showTable = false;


  constructor(public router: Router, public userpanelServiceService: UserpanelServiceService, public modalService: NgbModal,
    public spinner: NgxSpinnerService) {
    this.showTable = false;
    this.noDataFound=false;
      spinner.show();
    this.getAdvertisment();
  }

  ngOnInit(): void {
  
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
         setTimeout(() => {
            this.spinner.hide();
         }, 500);
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
