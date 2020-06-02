import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerService } from 'ngx-spinner';
import itemListData from '../../../assets/arraylocation/itemList.json';
import timedata from '../../../assets/arraylocation/timeList.json';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { formatDate } from '@angular/common';
import { PaymentGatewayComponent } from '../payment-gateway/payment-gateway.component';
import { MyCookies } from 'src/app/utillpackage/utillpackage/my-cookies';
import { MyRoutingMethods } from 'src/app/utillpackage/utillpackage/my-routing-methods';
import { Router } from '@angular/router';
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
  @ViewChild('sameLocationModalDiaolg', { static: true }) sameLocationModal: NgbModal;
  @ViewChild('modalDiaolg', { static: true }) modalConent: NgbModal;
  @ViewChild('distanceModal', { static: true }) distanceModal: NgbModal;
  @ViewChild(PaymentGatewayComponent, { static: true }) PaymentGatewayComponent: NgbModal;
  pickupLocation = true;
  destinationboolean = false;
  textboxLabel: string;
  textBoxPLaceBolder: string
  iconDisplay: string
  pickUpLocationName: string;
  temparyNameDesination: string
  destinationLocationName: string;
  destinationRegion: string;
  pickupRegion : string;
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
  selectedDate: Date;
  formFieldshow = false;
  phonenumber: any
  email: any
  name: any
  priceForDelivery: string = '$99/hr';
  timearrayList: Array<any>
  selectedTimeSlot: string;
  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  username: any
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  selecteddatebutton = false;
  rightNowButton = false;
  totalDistance:number = 0;

  constructor(private mapsAPILoader: MapsAPILoader, public ngZone: NgZone, public userBackEndService: UserpanelServiceService,
    public modalService: NgbModal, public cookiesSerive: CookieService, public spinner: NgxSpinnerService,
    private formBuilder: FormBuilder,public router:Router) {
    this.origin = "";
    this.destination = "";
    this.phonenumber = "";
    this.email = "";
    this.name = "";
    this.username = "";
    this.pickUpLocationName = "";
    this.destinationLocationName = "";
    this.searchingValue = "";
    this.selectedDate = null;
    this.temparyNameDesination = "";
    this.pickupLocation = true;
    this.destinationboolean = false;
    this.showItemPage = false;
    this.dateSelectedPage = false;
    this.showtimefalse = false;
    this.selecteddatebutton = true;
    this.rightNowButton = false;
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
    this.timearrayList = [];
    if (this.itemList.length == 0) {
      this.loadMap()
      this.getSelectedLocationIds();
    }
    this.formGroup = formBuilder.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

  }

  ngOnInit(): void {
    this.createForm();
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
  }

  /**
  * method to show same Localtion error popup
  */
  openSameLocationModal() {
    this.modalReference = this.modalService.open(this.sameLocationModal,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'custom-class sameLocationErrorPopup',
        centered: true
      });
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
  }

  /**
   * method to load Google Maps
   */
  loadMap() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {});
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          CommonMethods.showconsole("Palce", place)
          let found: boolean = false;
          this.selectedLocationIds.forEach(element => {
            let placeRegex = '(.*(' + element.place_Name.toUpperCase() + ').+(FL|FLORIDA).+(USA|UNITED STATES))+';
            if (place.formatted_address.toUpperCase().match(placeRegex)) {
              found = true;
              if (this.pickupLocation == true) {
                this.pickupRegion = element.region;
              }
              else {
                this.destinationRegion = element.region;
              }
            }
          });
          if (found) {
            let showNextButton: boolean = true;
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            if (this.pickupLocation == true) {
              this.pickUpLocationName = place.formatted_address;
            } else if (this.origin.lat() != this.lat && this.origin.lng() != this.lng) {
              this.temparyNameDesination = place.formatted_address;
            } else {
              showNextButton = false;
              this.openSameLocationModal()
            }
            if (showNextButton) {
              this.toggelNextBtn();
            }
          } else {
            this.openModal();
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
      });
    }
  }

// mapClicked($event: MouseEvent) {
  //   this.addSubStoreModel.lat = $event.coords.lat;
  //   this.addSubStoreModel.lat = $event.coords.lng;
  //   CommonMethods.showconsole(this.Tag," before Lat:- "+this.addSubStoreModel.lat)
  //   CommonMethods.showconsole(this.Tag,"before Long: "+this.addSubStoreModel.lng)
  // }

  markerDragEnd($event: MouseEvent) {
    console.log('dragEnd', $event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    CommonMethods.showconsole(this.Tag, "Lat:- " + this.lat)
    CommonMethods.showconsole(this.Tag, "Long: " + this.lng)
    this.getAddress(this.lat,this.lng)
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {

      if (status === 'OK') {
        if (results[0]) {
          // this.zoom = 16;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
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

  /**
   * functionality on Back button click
   */
  gotoBack() {
    if (this.showFinallist == true) {
      this.showFinallist = false;
      this.formFieldshow = true;
    } else if (this.formFieldshow == true) {
      this.formFieldshow = false;
      this.dateSelectedPage = true;
    } else if (this.dateSelectedPage == true) {
      this.dateSelectedPage = false;
      this.spinner.show()
      this.searchingValue = "";
      this.searchItemList = [];
      this.itemList = JSON.parse(JSON.stringify(itemListData));;
      if (this.selectedItemList.length != 0) {
        this.selectedItemList.forEach(selectedProduct => {
          this.itemList.forEach(itemList => {
            var itemListproduc = itemList.item_list;
            itemListproduc.forEach(product => {
              if (selectedProduct.item_id == product.item_id) {
                product.quantity = selectedProduct.quantity
              }
            });

          });
        });
      }
      setTimeout(() => {
        this.showItemPage = true;
        this.spinner.hide()
      }, 500);
    } else if (this.showItemPage == true && this.itemList.length != 0) {
      this.showItemPage = false;
      this.itemList = []
      this.searchElementRef.nativeElement.value = this.destinationLocationName;
      this.textboxLabel = "Delivery  Address";
      this.textBoxPLaceBolder = "Enter Delivery Address"
      this.iconDisplay = "fa fa-arrow-circle-down";
      this.destinationboolean = true
    } else if (this.destinationboolean == true) {
      this.temparyNameDesination = "";
      this.destinationboolean = false
      this.searchElementRef.nativeElement.value = this.pickUpLocationName;
      this.textboxLabel = "Pick Up Address";
      this.textBoxPLaceBolder = "Enter PickUp Address"
      this.iconDisplay = "fa fa-arrow-circle-up";
      this.pickupLocation = true;
    }

  }

  /**
   *metehod On Next Click
  */
  gotoNext() {
    if (this.pickupLocation == true) {
      if(this.origin == ''){
      this.origin = new google.maps.LatLng(this.lat,this.lng);
      }
      this.pickupLocation = false;
      this.destinationboolean = true;
      if(this.destinationLocationName == ''){
      this.searchElementRef.nativeElement.value = "";
      }
      else{
        this.searchElementRef.nativeElement.value = this.destinationLocationName;
        this.temparyNameDesination = this.destinationLocationName;
      }
      this.textboxLabel = "Delivery  Address";
      this.textBoxPLaceBolder = "Enter Delivery Address"
      this.iconDisplay = "fa fa-arrow-circle-down";
    } else if (this.destinationboolean == true) {
      this.spinner.show();
      this.destination = new google.maps.LatLng(
        this.lat,
        this.lng
      );
      let totalDisTanceintoMiles: any;
      let calculateDistanceByRoadservice = new google.maps.DistanceMatrixService().getDistanceMatrix({ 'origins': [this.origin], 'destinations': [this.destination], travelMode: 'DRIVING', 'unitSystem': google.maps.UnitSystem.IMPERIAL }, (results: any) => {
        totalDisTanceintoMiles = results.rows[0].elements[0].distance?.text;
        this.totalDistance = parseFloat(totalDisTanceintoMiles.match('[\\d]+.[\\d]+')[0]);
        switch (this.pickupRegion) {
          case "Home":
                      {
                        if (this.totalDistance > 25) {
                          if (this.destinationRegion == "South Region") {
                            this.priceForDelivery = '$119.50/hr';
                          } else if (this.destinationRegion == "Central Region") {
                            this.priceForDelivery = '$149.50/hr';
                          } else {
                            this.priceForDelivery = '$99.50/hr';
                          }
                        }
                        else {
                          this.priceForDelivery = '$99/hr';
                        }
                        break;
                      }
          case "South Region":
                      {
                        if (this.totalDistance < 25) {
                          this.priceForDelivery = '$119/hr';
                        }
                        else {
                          this.priceForDelivery = '$149.50/hr';
                        }
                        break;
                      }
          case "Central Region":
                      {
                        if (this.totalDistance < 25) {
                          this.priceForDelivery = '$149/hr';
                        }
                        else {
                          this.priceForDelivery = '$149.50/hr';
                        }
                        break;
                      }
        }
      });
      if (this.destinationLocationName.length != 0 && this.temparyNameDesination.length == 0) {
        this.temparyNameDesination = this.destinationLocationName;
        this.searchElementRef.nativeElement.value = this.destinationLocationName;
      } else {
        this.destinationLocationName = this.temparyNameDesination;
      }
      this.itemList = JSON.parse(JSON.stringify(itemListData));
      if (this.selectedItemList.length != 0) {
        this.selectedItemList.forEach(selectedProduct => {
          this.itemList.forEach(itemList => {
            var itemListproduc = itemList.item_list;
            itemListproduc.forEach(product => {
              if (selectedProduct.item_id == product.item_id) {
                product.quantity = selectedProduct.quantity
              }
            });
          });
        });
      }
      setTimeout(() => {
        this.destinationboolean = false;
        this.showItemPage = true;
        this.spinner.hide();
      }, 500);
    } else if (this.showItemPage && this.itemList.length != 0) {
      this.showItemPage = false;
      this.getDateNextThree();
      if (this.selecteddatebutton == true) {
        if (this.selectedDate != null) {
          this.selectedDate = this.selectedDate;
        } else {
          this.selectedDate = null;
        }
        this.rightNowButton = false
      } else {
        this.rightNowButton = true
      }
      this.dateSelectedPage = true;
    } else if (this.dateSelectedPage) {
      this.dateSelectedPage = false;
      if (MyCookies.checkLoginStatus(this.cookiesSerive) == true) {
        let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        var userfullname = MyCookies.getUserFistName(this.cookiesSerive) + " " + MyCookies.getUseLastName(this.cookiesSerive)
        this.formGroup = this.formBuilder.group({
          'name': [userfullname,[Validators.required] ],
          'email':[ MyCookies.getEmaild(this.cookiesSerive), [Validators.required, Validators.pattern(emailregex)]],
          'mobileNumber': [MyCookies.getUsercontact(this.cookiesSerive),[Validators.required, Validators.pattern('[0-9]{10}')]],
          'any_special_instruction': [null]
        });
      }
      this.formFieldshow = true;
    } else if (this.formFieldshow == true) {
      this.formFieldshow = false;
      this.showFinallist = true;
    } else {
    }
  }

 
  /**
   * Method to Reset all the Values 
   */
  clickReset() {
    this.opensweetalert()
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
    if (this.dateSelectedPage && this.selectedDate != null && this.selectedTimeSlot != '') {
      return false;
    }
    if (this.formFieldshow && this.formGroup.valid) {
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
    let today = new Date();
    if (today.getHours() >= 19) {
      if (today.getHours() == 19 && today.getMinutes() > 30) {
        today.setDate(today.getDate() + 1);
      }
      if (today.getHours() >= 20) {
        today.setDate(today.getDate() + 1);
      }
    }
    if (this.dateList.length == 0) {
      this.timearrayList = JSON.parse(JSON.stringify(timedata));
      this.dateList.push({
        "date_Id": "1",
        "date": today.setDate(today.getDate()),
        "showtime": false
      });
      this.dateList.push({
        "date_Id": "2",
        "date": today.setDate(today.getDate() + 1),
        "showtime": false
      });
      this.dateList.push({
        "date_Id": "3",
        "date": today.setDate(today.getDate() + 1),
        "showtime": false
      });
    }
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
  }


  /**
   * method to set selected date
   * @param dateID 
   */
  setSelectedDate(dateID: any) {
    this.dateList.forEach(element => {
      if (element.date_Id == dateID) {
        element.showtime = true;
        this.showtimefalse = true;
        this.selectedDate = new Date(element.date);
        if (this.selectedDate.getDate() == new Date().getDate()) {
          let timeSlotStartHour: number = 0;
          if (this.selectedDate.getMinutes() > 30) {
            timeSlotStartHour = this.selectedDate.getHours() + 1;
          }
          else {
            timeSlotStartHour = this.selectedDate.getHours();
          }
          this.timearrayList = JSON.parse(JSON.stringify(timedata.filter(time => time.starting_Time >= timeSlotStartHour)));
        }
        else {
          this.timearrayList = JSON.parse(JSON.stringify(timedata));
        }
      } else {
        element.showtime = false;
      }
    });
  }

  /**
   * method to set selected timeslot
   * @param timeSlotId 
   */
  setTimeSlot(timeSlotId: any) {
    this.timearrayList.forEach(timeSlot => {
      if (timeSlot.time_slot_id == timeSlotId) {
        timeSlot.isactive = true;
        this.selectedTimeSlot = timeSlot.full_length_statingtime + '-' + timeSlot.full_length_endingtime;
      }
      else
        timeSlot.isactive = false;
    });

  }

  /**
   *  Input contact Form Validation
   */
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'mobileNumber': [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
      'any_special_instruction': [null]
    });
  }

  /**
   * return error for email field
   */
  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Email address is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Email address is not valid' : '';

  }

  /**
   * disabling all characters  other than numbers
   * @param event 
   */
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }

  /**
   * on Click of  Selected date and right now button
   * @param buttonname 
   */
  selctedDateCategory(buttonname: string) {
    if (buttonname == 'selectbydatetime' && this.selecteddatebutton == false) {
      this.selectedDate = null;
      this.dateList = [];
      this.selectedTimeSlot = "";
      this.getDateNextThree();
      this.selecteddatebutton = true;
      this.rightNowButton = false;
    } else {
      this.showtimefalse = false;
      this.timearrayList = [];
      this.selectedDate = new Date();
      this.selectedTimeSlot = this.selectedDate.toLocaleTimeString().slice(0,-3);
      if(this.selectedDate.getHours()<=12){
        this.selectedTimeSlot = this.selectedTimeSlot +' AM';
      }
      this.selecteddatebutton = false;
      this.rightNowButton = true;
    }

  }

  /**
   * method to count total selected items
   */
  countTotalQuantityOfSelectedItems(): number {
    let totalCount: number = 0;
    this.selectedItemList.forEach(item => {
      totalCount = totalCount + item.quantity;
    });
    return totalCount;
  }

  /**
   * show confirmation popup before resetting data
   */
  opensweetalert() {
    Swal.fire({
      title: "Are you sure?",
      text: "Once you click , you will not be able to recover this imaginary file!",
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete.value) {
        this.dataReset();
      } else {
       
      }
    });
  }


  /**
   * Data Reset 
   */
  dataReset() {
    this.pickupLocation = true;
    this.destinationboolean = false;
    this.dateSelectedPage = false;
    this.selectedDate = null;
    this.searchingValue = ""
    this.formFieldshow = false;
    this.showFinallist = false
    this.dateList = [];
    this.origin = "";
    this.destination = "";
    this.selectedTimeSlot = ""
    this.pickUpLocationName = "";
    this.itemList = [];
    this.selectedItemList = [];
    this.searchItemList = [];
    this.showtimefalse = false;
    this.timearrayList = [];
    this.formGroup.reset();
    this.temparyNameDesination = "";
    this.destinationLocationName = "";
    this.searchElementRef.nativeElement.value = "";
    this.textboxLabel = "Pick Up Address";
    this.textBoxPLaceBolder = "Enter PickUp Address"
    this.iconDisplay = "fa fa-arrow-circle-up";
    this.setCurrentLocation()
  }

  /**
   * method to get formatted  token amount
   */
  showTokenAmount():number{
    return parseFloat(this.priceForDelivery.match('[\\d]+')[0]);
  }

checkoutClick(){
  this.modalOpen()
}

modalOpen()
{
let user = {
  name: 'Izzat Nadiri',
  email:  this.formGroup.get('email').value,
  price: parseFloat(this.priceForDelivery.match('[\\d]+')[0])
  }
  

    this.modalReference =this.modalService.open(PaymentGatewayComponent, {
      ariaLabelledBy: 'modal-basic-title',
       windowClass: 'paymentModal',
      // backdrop:false,
      centered: true,
      
    });

    this.modalReference.componentInstance.name =user;
    this.modalReference.result.then(
      (data: any) => {
        if (data != "") {
          CommonMethods.showconsole(this.Tag, "Token Id :- " + data)
          Swal.fire({
            text: "Payment successful",
            icon: 'success'
          }).then((result) => {
            if (result.value === true) {
              this.dataReset()
              MyRoutingMethods.gotoHome(this.router)
            }
          });
       
        } else {
          CommonMethods.showconsole(this.Tag, "Token Id :- " + data)
        }
        // this.processData(data);

      },
      (reason: any) => { }
    );
}



}
