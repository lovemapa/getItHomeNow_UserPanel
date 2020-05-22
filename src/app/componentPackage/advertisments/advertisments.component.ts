import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { AdvertisementModel } from 'src/app/modalPackages/advertisement';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonMethods } from 'src/app/utillpackage/common-method';

@Component({
  selector: 'app-advertisments',
  templateUrl: './advertisments.component.html',
  styleUrls: ['./advertisments.component.css']
})
export class AdvertismentsComponent implements OnInit {
  Tag = "AdvertismentsComponent";
  public searchString: string = "";
  public noDataFound: boolean = false;
  public adsList: Array<AdvertisementModel> = [];
  public showTable = false;


  public nextButton = false;
  public previousButton = false;
  public pageNumber: number;
  public pageLimit: number;
  public paggination: Array<any>;
  public isLoadingPaggition = false;
  public lastPageNumber: number;


  constructor(public router: Router, public userpanelServiceService: UserpanelServiceService, public modalService: NgbModal,
    public spinner: NgxSpinnerService) {

    this.showTable = false;
    this.noDataFound = false;

    this.previousButton = true;
    this.nextButton = false;
    this.pageNumber = 1;
    this.pageLimit = 6;
    this.paggination = [];
    this.lastPageNumber = 0;
    this.isLoadingPaggition = false

    this.getAdvertisment();
  }

  ngOnInit(): void {

  }



  /**GEt AdverTisMEnt List */
  getAdvertisment(searchTerm?: string) {
    this.spinner.show();
    this.adsList = [];
    // if (searchTerm || searchTerm == '') {
    //   this.searchString = searchTerm;
    // }
    this.userpanelServiceService.getAdvertisement(this.searchString, this.pageNumber).subscribe(response => {
      if (response.success) {
        CommonMethods.showconsole("Working:- ",response)
        this.adsList = response.data;
        this.showTable = true;

        if (this.pageNumber == response.totalPages) {
          this.nextButton = true
        }
        else {
          this.nextButton = false
        }
        this.lastPageNumber = response.totalPages;
         CommonMethods.showconsole(this.Tag,' Is lOAgin into get function:- '+this.isLoadingPaggition)
        if (this.isLoadingPaggition == false) {
          this.paggination = [];
          CommonMethods.showconsole(this.Tag, "Function Is woking Once Time ")

          for (var i = 0; i < response.totalPages; i++) {
            // CommonMethods.showconsole(this.Tag, "Paggition " + i)
            var state = false;
            if (i == 0) {
              state = true
            }
            this.paggination.push({
              "pageNo": i + 1,
              "status": state
            });
          }
          this.isLoadingPaggition = true;
        }
        CommonMethods.showconsole(this.Tag, "Array :- " + JSON.stringify(this.paggination))
       
        if (this.adsList.length == 0) {
          this.showTable = false;
        }
        this.spinner.hide();
      }
      else {
        this.noDataFound = true;
        this.spinner.hide();
      }
    });
  }



  createContent(content: string): Array<string> {
    let contentArray: Array<string> = content.split("%");
     CommonMethods.showconsole(this.Tag,"Show Length "+JSON.stringify(contentArray[2]) )
    return contentArray;
  }

/**
 *  Click Show All Button 
 */
  
  clickOnshowAll(){
    this.pageNumber=1;
    this.searchString=""
     CommonMethods.showconsole(this.Tag,"isLoadingPaggition:- "+this.isLoadingPaggition)
     this.isLoadingPaggition=false;
     CommonMethods.showconsole(this.Tag,"after isLoadingPaggition:- "+this.isLoadingPaggition)
    this.getAdvertisment("");
  }
  
onKeypressSearch(){
  this.pageNumber=1;
  this.isLoadingPaggition=false;
  CommonMethods.showconsole(this.Tag,"after isLoadingPaggition:- Function IS working  "+this.isLoadingPaggition)
  this.getAdvertisment("");
}


  /**
  *   Previous  Click Function
  */
  previous() {
    this.pageNumber--;
    this.pageNumberClick(this.pageNumber)
  }
  /**
   * End
   */
  /**
   *   next  Click Function
   */
  next() {
    this.previousButton = false;
    this.pageNumber++;
    this.pageNumberClick(this.pageNumber)
  }
  /**
   * End
   */

  /**
   * Page Number Click
   */
  pageNumberClick(currentPageNumber: number) {
    this.pageNumber = 0;

    CommonMethods.showconsole(this.Tag, "Page Number :- " + currentPageNumber);
    for (var i = 0; i < this.paggination.length; i++) {
      if (this.paggination[i].pageNo == currentPageNumber) {
        this.paggination[i].status = true;
      } else {
        this.paggination[i].status = false;
      }
    }
    this.pageNumber = currentPageNumber;
    if (this.pageNumber == 1) {
      this.previousButton = true;
    } else {
      this.previousButton = false;
    }
    if (this.pageNumber == this.lastPageNumber) {
      this.nextButton = true
    } else {
      this.nextButton = false
    }
    this.getAdvertisment();

  }


  gotoInstaPage(){
    window.open('https://www.instagram.com/getithomenow/','_blank')
  }

}
