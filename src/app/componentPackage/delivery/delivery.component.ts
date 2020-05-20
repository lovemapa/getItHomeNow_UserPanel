import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';

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
  showItemPage = false;
  dateSelectedPage = false;
  showtimefalse = false;
  showFinallist = false;
  dateValue: any
  formFieldshow = false;
  phonenumber: any
  email: any
  name: any
  constructor(private mapsAPILoader: MapsAPILoader, public ngZone: NgZone, public userBackEndService: UserpanelServiceService,
    public modalService: NgbModal,public cookiesSerive:CookieService,public spinner:NgxSpinnerService) {
    this.origin = "";
    this.destination = "";
    this.phonenumber = "";
    this.email = "";
    this.name = "";
    this.pickUpLocationName = "";
    this.destinationLocationName = "";
    this.searchingValue = "";
    this.dateValue = "";
    this.temparyNameDesination = "";
    this.pickupLocation = true;
    this.destinationboolean = false;
    this.showItemPage = false;
    this.dateSelectedPage = false;
    this.showtimefalse = false;
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
    // // // this.formFieldshow=true;
    // //  this.showFinallist=true;
    // this.dateSelectedPage=true;
    // this.formFieldshow=false;
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
          CommonMethods.showconsole("Palce", place)
          let found = this.selectedLocationIds.filter(element => element.place_Name.toUpperCase().match(place.vicinity.toUpperCase()) && place.formatted_address.includes('FL'));
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
    if (this.showFinallist == true) {
      this.showFinallist = false;
      this.formFieldshow = true;

    } else if (this.formFieldshow == true) {
      this.formFieldshow = false;
      this.dateSelectedPage = true;

    } else if (this.dateSelectedPage == true) {
      this.spinner.show()
      this.dateSelectedPage = false;
      this.searchingValue="";
      this.searchItemList = [];
      this.userBackEndService.getItemLists().subscribe(responseData => {
        if(this.cookiesSerive.check('selected_productList') == true)
        {
          this.itemList = responseData;
            this.selectedItemList.forEach(selectedProduct => {
                   this.itemList.forEach(itemList => {
                     var itemListproduc = itemList.item_list;
                     itemListproduc.forEach(product => {
                      if(selectedProduct.item_id == product.item_id )
                      {
                        product.quantity=selectedProduct.quantity
                      }
                     });
                      
                   });
            });
        }else{
          this.itemList = responseData;
        }
        this.showItemPage = true;
      })
      setTimeout(() => {
        this.spinner.hide()
      }, 2000);
     
      this.showItemPage = true;
    }else if(this.showItemPage == true){
        this.showItemPage = false;
        this.itemList=[]
        this.destinationboolean=true
        this.searchElementRef.nativeElement.value = this.destinationLocationName;
        this.textboxLabel = "Delivery  Address";
        this.textBoxPLaceBolder = "Enter Delivery Address"
        this.iconDisplay = "fa fa-arrow-circle-down";

    }else {
      this.destinationboolean =false
      this.searchElementRef.nativeElement.value = this.pickUpLocationName;
      this.textboxLabel = "Pick Up Address";
      this.textBoxPLaceBolder = "Enter PickUp Address"
      this.iconDisplay = "fa fa-arrow-circle-up";
      this.pickupLocation=true;
    }
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
      this.spinner.show()
      this.destination = new google.maps.LatLng(
        this.lat,
        this.lng
      );
      let totalDisTanceintoMiles: any;
      let calculateDistanceByRoadservice = new google.maps.DistanceMatrixService().getDistanceMatrix({ 'origins': [this.origin], 'destinations': [this.destination], travelMode: 'DRIVING', 'unitSystem': google.maps.UnitSystem.IMPERIAL }, (results: any) => {
        totalDisTanceintoMiles = results.rows[0].elements[0].distance?.text;
        if (parseFloat(totalDisTanceintoMiles.match('[\\d]+.[\\d]+')[0]) > 25) {
          this.openModalDistanceCheck();
        } else {
          this.destinationLocationName = this.temparyNameDesination;
          this.destinationboolean = false;
          
          this.userBackEndService.getItemLists().subscribe(responseData => {
            
            if(this.cookiesSerive.check('selected_productList') == true)
            {
              this.itemList = responseData;
                this.selectedItemList.forEach(selectedProduct => {
                       this.itemList.forEach(itemList => {
                         var itemListproduc = itemList.item_list;
                         itemListproduc.forEach(product => {
                          if(selectedProduct.item_id == product.item_id )
                          {
                            product.quantity=selectedProduct.quantity
                          }
                         });
                          
                       });
                });
            }else{
              this.itemList = responseData;
            }
            this.showItemPage = true;
            setTimeout(() => {
              this.spinner.hide()
            }, 2000);
          })
        }
      });
    } else if (this.showItemPage && this.itemList.length != 0) {
      this.showItemPage = false;
      this.getDateNextThree();
      this.dateSelectedPage = true;

    } else if (this.dateSelectedPage) {
      this.dateSelectedPage = false;
      this.formFieldshow = true;
      CommonMethods.showconsole(this.Tag, "email:- " + this.email)
      CommonMethods.showconsole(this.Tag, "name:- " + this.name)
      CommonMethods.showconsole(this.Tag, "phone Number:- " + this.phonenumber)

    } else if (this.formFieldshow == true) {
      CommonMethods.showconsole(this.Tag, "function is working")
      this.formFieldshow = false;
      this.showFinallist = true;

    } else {

    }
  }

  /**
   * Method to Reset all the Values 
   */
  clickReset() {
    this.pickupLocation = true;
    this.destinationboolean = false;
    this.dateSelectedPage = false;
    this.dateValue="";
    this.name="";
    this.email="";
    this.phonenumber="";
    this.formFieldshow= false;
    this.showFinallist=false
    this.dateList = [];
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
    if (this.showItemPage && this.selectedItemList.length > 0) {
      return false;
    }
    if (this.dateSelectedPage && this.dateValue != "") {
      return false;
    }
    if (this.formFieldshow && this.name.trim().length != 0 && this.email.trim().length != 0 && this.phonenumber.trim().length != 0) {
      CommonMethods.showconsole(this.Tag, "Function")
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
      "date_Id": "1",
      "date": date,
      "showtime": false
    });
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    var date2 = (tomorrow.getMonth() + 1) + '/' + tomorrow.getDate();
    this.dateList.push({
      "date_Id": "2",
      "date": date2,
      "showtime": false
    });
    var dayatom = new Date(tomorrow.getTime() + (24 * 60 * 60 * 1000));
    var date3 = (dayatom.getMonth() + 1) + '/' + dayatom.getDate();
    this.dateList.push({
      "date_Id": "3",
      "date": date3,
      "showtime": false
    });
    CommonMethods.showconsole(this.Tag, "Show Date Array :- " + JSON.stringify(this.dateList))
  }

  /**
   * method to toggle accordion on item clicked
   * @param item clicked item
   */
  onItemClicked(item: any) {
    this.itemList.forEach(items => {
      items.item_list.forEach(data => {
        if (data.item_id != item.item_id) {
          data.item_boolean = false;
        }
      });
    });
  }

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

  this.cookiesSerive.set("selected_productList",JSON.stringify(this.selectedItemList) )

  }


  clickOnselectdate(dateID: any) {
    this.showtimefalse = false;
    CommonMethods.showconsole(this.Tag, "IS Working:- " + dateID)

    this.dateList.forEach(element => {
      if (element.date_Id == dateID) {
        if (element.showtime == false) {
          element.showtime = true;
          this.showtimefalse = true;
          this.dateValue = element.date;
        } else {
          element.showtime.showtime = false;
          this.showtimefalse = false;
        }
      } else {
        element.showtime = false;
      }
    });
  }


  keyPress(event: any) {
    const patt = /^[0-9]{1,4}(\.[0-9][0-9])?$/
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !patt.test(inputChar)) {
      event.preventDefault();
    }
  }


}
