import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import * as selectedLocationIds from '../../../assets/arraylocation/location.json';
// import {} from "googlemaps";
declare var google: any;
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  Tag = "DeliveryComponent";
  lat: number = 0;
  lng: number = 0;
  private geoCoder;
  destination: any;
  origin: any;
  modalReference: NgbModalRef;
  selectedLocationIds: Array<any>;
  itemList: Array<any>;
  @ViewChild('search', { static: true }) searchElementRef: ElementRef;
  @ViewChild('modalDiaolg', { static: true }) modalConent: NgbModal;
  @ViewChild('distanceModal', { static: true }) distanceModal: NgbModal;
  pickupLocation = true;
  destinationboolean = false;
  textboxLabel: string;
  textBoxPLaceBolder: string
  iconDisplay: string
  pickUpLocationName: string;
  temparyNameDesination: string
  destinationLocationName: string;
  selectedItemList: Array<any>
  searchItemList: Array<any>
  searchingValue: string
  dateList: Array<any>;
  count: number;
  previousId: any
  showItemPage=false;
  dateSelectedPage=false;
  showtimefalse=false;

  constructor(private mapsAPILoader: MapsAPILoader, public ngZone: NgZone, public userBackEndService: UserpanelServiceService,
    public modalService: NgbModal) {
    this.origin = "";
    this.destination = "";
    this.pickUpLocationName = "";
    this.destinationLocationName = "";
    this.searchingValue = "";
    this.temparyNameDesination = "";
    this.pickupLocation = true;
    this.destinationboolean = false;
    this.showItemPage=false;
    this.dateSelectedPage=false;
    this.showtimefalse=false;
    this.selectedLocationIds = [];
    this.itemList = [];
    this.selectedItemList = [];
    this.searchItemList = [];
    this.dateList = [];
    this.count = 0
    this.textboxLabel = "Pick Up Address";
    this.textBoxPLaceBolder = "Enter PickUp Address"
    this.iconDisplay = "fa fa-arrow-circle-up";
    this.previousId = "";
    if (this.itemList.length == 0) {
      this.loadMap()
      this.getSelectedLocationIds();
    }

    // this.userBackEndService.getItemLists().subscribe(responseData => {
    //   this.itemList = responseData;
    //   this.pickupLocation = false;
    //   console.log(this.itemList)
    // })
    // this.dateSelectedPage=true

    // this.getDateNextThree();

  }

  ngOnInit(): void {

  }

  /**
   * Get All Selected Location List 
   */
  getSelectedLocationIds() {
    this.userBackEndService.getSelectedLocationsId().subscribe(responseData => {
      this.selectedLocationIds = responseData
    });

  }

  /**
   * method to show Error popup on invalid location selection
   */
  openModal() {
    this.modalReference = this.modalService.open(this.modalConent,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'custom-class',
        centered: true
      });
    //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
  }

  /**
   * method to display Error Popup on exceeding distance more than 25miles
   */
  openModalDistanceCheck() {
    this.modalReference = this.modalService.open(this.distanceModal,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'custom-class',
        centered: true
      });
    //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
  }

  /**
   * method to load Google Maps
   */
  loadMap() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {

      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          let found = this.selectedLocationIds.filter(element => element.place_Name.toUpperCase().match(place.vicinity.toUpperCase()));
          if (found.length != 0) {
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            if (this.pickupLocation == true) {
              this.pickUpLocationName = place.formatted_address;
            } else {
              this.temparyNameDesination = place.formatted_address;
            }
            this.toggelNextBtn()
          } else {
            this.openModal();
            // this.openModalDistanceCheck();
          }
        });
      });

    });


  }

  /**
   * method to set current Location of User
   */
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.origin = { lat: position.coords.latitude, lng: position.coords.longitude };
      });
    }
  }


  /**
   * close Modal Function 
   */
  JoinAndClose() {
    this.modalReference.close();
  }

  /**
   * Return Class Name Of Search Icon into Map  
   */
  getReturnClass(className) {
    return className;
  }


  gotoBack() {

  }

  /**
   *metehod On Next Click
  */
  gotoNext() {
    if (this.pickupLocation == true) {
      this.origin = new google.maps.LatLng(
        this.lat,
        this.lng
      );
      this.pickupLocation = false;
      this.destinationboolean = true;
      this.searchElementRef.nativeElement.value = "";
      this.textboxLabel = "Delivery  Address";
      this.textBoxPLaceBolder = "Enter Delivery Address"
      this.iconDisplay = "fa fa-arrow-circle-down";
    } else if (this.destinationboolean == true) {
      this.destination = new google.maps.LatLng(
        this.lat,
        this.lng
      );
      let totalDisTanceintoMiles = "";
      CommonMethods.showconsole(this.Tag, "oriogin" + JSON.stringify(this.origin))
      CommonMethods.showconsole("Destination", JSON.stringify(this.destination))
      let calculateDistanceByRoadservice = new google.maps.DistanceMatrixService().getDistanceMatrix({ 'origins': [this.origin], 'destinations': [this.destination], travelMode: 'DRIVING', 'unitSystem': google.maps.UnitSystem.IMPERIAL }, (results: any) => {
        console.log('distancia (mts) -- ', results.rows[0].elements[0].distance?.text, results);
        totalDisTanceintoMiles = results.rows[0].elements[0].distance?.text, results;
        //  CommonMethods.showconsole(this.Tag,"Show DistAnce Into")
      });
      if (totalDisTanceintoMiles > "26") {
        this.openModalDistanceCheck();
      } else {
        this.destinationLocationName = this.temparyNameDesination;
        this.destinationboolean = false
        this.userBackEndService.getItemLists().subscribe(responseData => {
          CommonMethods.showconsole(this.Tag, "Show Item List:- " + JSON.stringify(responseData));
          this.itemList = responseData;
          this.showItemPage=true

        })
      }
    } else if(this.showItemPage = true && this.itemList.length != 0){
      console.log(this.selectedItemList)
       this.showItemPage =false;
       this.getDateNextThree();
       this.dateSelectedPage=true
       
    }else{

    }
  }

  /**
   * Method to Reset all the Values 
   */
  clickReset() {
    this.pickupLocation = true;
    this.destinationboolean = false;
    this.dateSelectedPage=false;
    this.dateList=[];
    this.origin = "";
    this.destination = "";
    this.pickUpLocationName = "";
    this.itemList = [];
    this.temparyNameDesination = "";
    this.destinationLocationName = "";
    this.searchElementRef.nativeElement.value = "";
    this.textboxLabel = "Pick Up Address";
    this.textBoxPLaceBolder = "Enter PickUp Address"
    this.iconDisplay = "fa fa-arrow-circle-up";
  }

  /**
   * method to toggel the next button
   */
  toggelNextBtn(): boolean {
    if (this.pickupLocation && this.pickUpLocationName != '') {
      return false;
    }
    if (this.destinationboolean && this.temparyNameDesination != '') {
      return false;
    }
    if (this.selectedItemList.length > 0) {
      return false;
    }
    return true;
  }


  /**
   * method to search items in itemList
   * @param searchingValue search Term
   */
  searching(searchingValue: string) {
    let found = [];
    this.searchItemList = [];
    this.itemList.forEach(element => {
      let data = element.item_list.filter(data => data.item_Name.toUpperCase().includes(searchingValue.toUpperCase()));
      if (data.length > 0) {
        found = found.concat(data);
      }
    });
    this.searchItemList = found;
    if (this.searchingValue.length == 0) {
      this.searchItemList = [];
      found = []
    }
  }

  /**
   * method to get next three days Date
   */
  getDateNextThree() {
    this.dateList = [];
    var today = new Date();
    var weekday = ['Sunday', 'Monday', 'Tuesday',
      'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    var date = (today.getMonth() + 1) + '/' + today.getDate();
    this.dateList.push({
      "date_Id":"1",
      "date":date,
      "showtime":false
    });
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    var date2 = (tomorrow.getMonth() + 1) + '/' + tomorrow.getDate();
    this.dateList.push({
      "date_Id":"2",
      "date":date2,
      "showtime":false
    });
    var dayatom = new Date(tomorrow.getTime() + (24 * 60 * 60 * 1000));
    var date3 = (dayatom.getMonth() + 1) + '/' + dayatom.getDate();
    this.dateList.push({
      "date_Id":"3",
      "date":date3,
      "showtime":false
    });
    CommonMethods.showconsole(this.Tag, "Show Date Array :- " + JSON.stringify(this.dateList))
  }

  // /**Onclick Show count div Function  */
  // clickOnShowCount(itemId: any, outerINdex: number) {
  //   CommonMethods.showconsole(this.Tag, "SHow Id:- " + itemId + " " + "Outer Index:- " + outerINdex)
  //   var itemArray: Array<any> = this.itemList[outerINdex].item_list;
  //   CommonMethods.showconsole(this.Tag, "Showprevious Id:- " + this.previousId)
  //   if (this.previousId.length == 0) {
  //     this.previousId = outerINdex;
  //   }

  //   for (var i = 0; i < itemArray.length; i++) {
  //     if (itemArray[i].item_id == itemId) {
  //       CommonMethods.showconsole(this.Tag, "if is working ")
  //       itemArray[i].item_boolean = true;
  //     } else {
  //       itemArray[i].item_boolean = false;
  //     }
  //   }

  //   CommonMethods.showconsole(this.Tag, "previous:- " + this.previousId + ' ' + " cuurent index:- " + outerINdex)
  //   if (this.previousId != outerINdex) {
  //     CommonMethods.showconsole(this.Tag, "Value Not match:- " + this.previousId)
  //     var itemArrayFalse: Array<any> = this.itemList[this.previousId].item_list;
  //     for (var i = 0; i < itemArrayFalse.length; i++) {
  //       itemArrayFalse[i].item_boolean = false;
  //     }
  //     this.previousId = outerINdex;
  //   }
  // }

  /**
   * method to update Quantity of items in selectedItemList
   */
  updateSelectedItemList(item: any, quantity: number) {
    let index = this.selectedItemList.map(x => x.item_id).indexOf(item.item_id);
    if (quantity > 0) {
      if (index > -1) {
        this.selectedItemList[index] = item;
      }
      else {
        this.selectedItemList.push(item);
      }
    }
    else {
      this.selectedItemList.splice(index, 1);
    }
  }


  clickOnselectdate(dateID:any){
    this.showtimefalse=false;
     CommonMethods.showconsole(this.Tag,"IS Working:- "+dateID)

    this.dateList.forEach(element => {
         if(element.date_Id == dateID)
         {
          if(element.showtime == false){
            element.showtime =true;
            this.showtimefalse=true;
          }else{
            element.showtime.showtime =false;
            this.showtimefalse=false;
          }
         }else{
          element.showtime =false;
         }
     });
  }

}
