import { Component, OnInit, ViewChild, ElementRef, NgZone, TemplateRef, ContentChild } from '@angular/core';
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
import { formatDate, DatePipe } from '@angular/common';
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
  @ViewChild('contactUs') contactUsTemplatetRef: TemplateRef<any>;
  @ViewChild('apartment', { static: true }) apartmentElementRef: ElementRef;
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
  pickupRegion: string;
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
  selectedTimeSlot: string = "";
  formGroup: FormGroup;
  contactUsForm: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  username: any
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  selecteddatebutton = false;
  rightNowButton = false;
  hasRightNowBooking = false;
  totalDistance: number = 0;
  bookingData:any = {};
  pickupApartment:string = '';
  deliveryApartment :string = '';
  itemsGreaterThan20 : boolean =  false;

  constructor(private mapsAPILoader: MapsAPILoader, public ngZone: NgZone, public userBackEndService: UserpanelServiceService,
    public modalService: NgbModal, public cookiesSerive: CookieService, public spinner: NgxSpinnerService,
    private formBuilder: FormBuilder, public router: Router, public datepipe: DatePipe) {
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
    this.contactFormPopup();
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

  /**
   * on clicking anywhere on map
   * @param $event 
   */
  mapClicked($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    this.getAddress(this.lat, this.lng)
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          var place = results[0]
          this.searchElementRef.nativeElement.value = place.formatted_address;

          let found: boolean = false;
          this.selectedLocationIds.forEach(element => {
            let placeRegex = '(.*(' + element.place_Name.toUpperCase() + ')[, ]+(FL|FLORIDA) .+(USA|UNITED STATES))+';
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
            this.searchElementRef.nativeElement.value = place.formatted_address;
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

        } else {
          CommonMethods.opensweetalertError('No results found');
        }
      } else {
        // window.alert('Geocoder failed due to: ' + status);
        CommonMethods.opensweetalertError('Geocoder failed due to: ' + status);
      }

    });
  }


  /**
   * close Modal Function 
   */
  JoinAndClose() {
    this.itemsGreaterThan20 = false;
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
      this.apartmentElementRef.nativeElement.value = this.deliveryApartment;
      this.textboxLabel = "Delivery  Address";
      this.textBoxPLaceBolder = "Enter Delivery Address"
      this.iconDisplay = "fa fa-arrow-circle-down";
      this.destinationboolean = true
    } else if (this.destinationboolean == true) {
      this.temparyNameDesination = "";
      this.destinationboolean = false
      this.searchElementRef.nativeElement.value = this.pickUpLocationName;
      this.apartmentElementRef.nativeElement.value = this.pickupApartment;
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
      if (this.origin == '') {
        this.origin = new google.maps.LatLng(this.lat, this.lng);
      }
      this.pickupApartment = this.apartmentElementRef.nativeElement.value;
      this.pickupLocation = false;
      this.destinationboolean = true;
      if (this.destinationLocationName == '') {
        this.searchElementRef.nativeElement.value = "";
      }
      else {
        this.searchElementRef.nativeElement.value = this.destinationLocationName;
        this.temparyNameDesination = this.destinationLocationName;
      }
      if(this.deliveryApartment == ''){
        this.apartmentElementRef.nativeElement.value = '';
      }
      else{
        this.apartmentElementRef.nativeElement.value = this.deliveryApartment;
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
      this.deliveryApartment = this.apartmentElementRef.nativeElement.value;
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
          'name': [userfullname, [Validators.required]],
          'email': [MyCookies.getEmaild(this.cookiesSerive), [Validators.required, Validators.pattern(emailregex)]],
          'mobileNumber': [MyCookies.getUsercontact(this.cookiesSerive), [Validators.required, Validators.pattern('[(]\\d{0,3}[)] \\d{0,3}-\\d{0,4}')]],
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
    if (this.showItemPage && this.selectedItemList.length > 0 && !this.itemsGreaterThan20) {
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
    if (this.countTotalQuantityOfSelectedItems() < 20) {
      this.itemsGreaterThan20 = false;
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
    else {
      item.quantity = item.quantity-1;
      this.itemsGreaterThan20 = true;
      this.contactUsPop(this.contactUsTemplatetRef);
    }
  }


  /**
   * method to set selected date
   * @param dateID 
   */
  setSelectedDate(dateID: any) {
    this.selectedTimeSlot = "";
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
      'mobileNumber': [null, [Validators.required, Validators.pattern('[(]\\d{0,3}[)] \\d{0,3}-\\d{0,4}')]],
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
    * disabling all number   other than characters
    * @param event 
    */
  _keyPresscharacter(event: any) {
    const pattern = /^[a-zA-Z\s]*$/;
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
      this.hasRightNowBooking = false;
    } else {
      this.showtimefalse = false;
      this.timearrayList = [];
      this.selectedDate = new Date();
      this.selectedTimeSlot = "";
      if (this.validateRightNow()) {
        this.selectedTimeSlot = "Right Now";
        this.hasRightNowBooking = true;
      }
      else {
        this.hasRightNowBooking = false;
      }
      this.selecteddatebutton = false;
      this.rightNowButton = true;
    }

  }

  /**
   * validate Right Now button
   */
  validateRightNow():boolean{
    if(this.selectedDate.getHours()<=9){
      if(this.selectedDate.getHours()==9 && this.selectedDate.getMinutes() >= 45){
        return true;
      }
      return false;
    }
    if(this.selectedDate.getHours()>=20){
      if(this.selectedDate.getHours()==20 && this.selectedDate.getMinutes() <= 15){
        return true;
      }
      return false;
    }
    return true;
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
      text: "Once you click Ok, you will not be able to recover booking details!",
      icon: 'warning',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      allowOutsideClick: false,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete.value) {
        this.dataReset();
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
    this.searchingValue = "";
    this.formFieldshow = false;
    this.showFinallist = false;
    this.dateList = [];
    this.origin = "";
    this.destination = "";
    this.selectedTimeSlot = "";
    this.pickUpLocationName = "";
    this.pickupApartment = "";
    this.itemList = [];
    this.selectedItemList = [];
    this.searchItemList = [];
    this.showtimefalse = false;
    this.hasRightNowBooking = false;
    this.timearrayList = [];
    this.formGroup.reset();
    this.temparyNameDesination = "";
    this.destinationLocationName = "";
    this.deliveryApartment = "";
    this.searchElementRef.nativeElement.value = "";
    this.apartmentElementRef.nativeElement.value = "";
    this.textboxLabel = "Pick Up Address";
    this.textBoxPLaceBolder = "Enter PickUp Address";
    this.iconDisplay = "fa fa-arrow-circle-up";
    this.setCurrentLocation()
  }

  /**
   * method to get formatted  token amount
   */
  showTokenAmount(): number {
    return parseFloat(this.priceForDelivery.match('[\\d]+')[0]);
  }

  checkoutClick() {
    this.setBookingData();
    if(!this.hasRightNowBooking){
      this.bookingData.amount = parseFloat(this.priceForDelivery.match('[\\d]+')[0]);
      this.bookingData.currency = 'inr';
      this.bookingData.receipt_email = this.formGroup.get('email').value;
      this.bookingData.phone = this.formGroup.get('mobileNumber').value;
      this.modalOpen()
    }
    else{
      this.spinner.show();
      // console.log("this.bookingData :", this.bookingData);
      this.userBackEndService.makePaymentFinal(this.bookingData).subscribe((responseData) => {
        this.spinner.hide();
        if (responseData.success) {
          Swal.fire({
            title: "Booking successful",
            text: "A driver will contact you shortly.",
            icon: 'success',
            allowOutsideClick: false,
            closeOnEsc: false,
          }).then((result) => {
            if (result.value === true) {
              this.dataReset()
              MyRoutingMethods.gotoHome(this.router);
            }
          });
        } else {
          CommonMethods.opensweetalertError(responseData.message)
        }
      },error => {
        this.spinner.hide();
        CommonMethods.opensweetalertError("Something went wrong! Please try again later!")
      });
    }
  }

  modalOpen() {
    this.modalReference = this.modalService.open(PaymentGatewayComponent, {
      ariaLabelledBy: 'modal-basic-title',
      windowClass: 'paymentModal',
      backdrop: "static",
      centered: true,
    });
    this.modalReference.componentInstance.bookingDetails = this.bookingData;
    this.modalReference.result.then(
      (data: any) => {
        if (data != "") {
          Swal.fire({
            title: "Payment successful",
            text: "Your payment was successful! A driver will contact you shortly.",
            imageUrl: './assets/imgs/payment-successful.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            allowOutsideClick: false,
            closeOnEsc: false,
          }).then((result) => {
            if (result.value === true) {
              this.dataReset();
              MyRoutingMethods.gotoHome(this.router);
            }
          });
        } else {
          CommonMethods.showconsole(this.Tag, "Token Id :- " + data);
        }
      },
      (reason: any) => { }
    );
  }

  /**Contact US Pop */
  contactUsPop(contactForm) {
    if (MyCookies.checkLoginStatus(this.cookiesSerive) == true) {
      var userName = MyCookies.getUserFistName(this.cookiesSerive) + " " + MyCookies.getUseLastName(this.cookiesSerive)
      let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.contactUsForm = this.formBuilder.group({
        'userEmail': [MyCookies.getEmaild(this.cookiesSerive), [Validators.required, Validators.pattern(emailregex)]],
        'userName': [userName, Validators.required],
        'userContactNo': [MyCookies.getUsercontact(this.cookiesSerive), [Validators.required, Validators.pattern('[0-9]{10}')]],
        'userComment': [null, Validators.required]
      });
    } else {
      this.contactFormPopup()
    }
    this.modalReference = this.modalService.open(contactForm, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: "static",
      centered: true,
    });
  }

  /**
   * format mobile number into (XXX) XXX-XXXX
   * @param value 
   * @param backspace 
   */
  onInputChange(value, backspace) {
    let formattedMobileNumber = value.replace(/\D/g, '');
    if (backspace && formattedMobileNumber.length <= 3) {
      formattedMobileNumber = formattedMobileNumber.substring(0, formattedMobileNumber.length - 1);
    }
    if (formattedMobileNumber.length === 0) {
      formattedMobileNumber = '';
    } else if (formattedMobileNumber.length <= 3) {
      formattedMobileNumber = formattedMobileNumber.replace(/^(\d{0,3})/, '($1)');
    } else if (formattedMobileNumber.length <= 6) {
      formattedMobileNumber = formattedMobileNumber.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
    } else if (formattedMobileNumber.length <= 10) {
      formattedMobileNumber = formattedMobileNumber.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
    } else {
      formattedMobileNumber = formattedMobileNumber.substring(0, 10);
      formattedMobileNumber = formattedMobileNumber.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
    }
    this.formGroup.controls.mobileNumber.setValue(formattedMobileNumber);
  }


  /**
    *  Input contact Form Validation
    */
  contactFormPopup() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.contactUsForm = this.formBuilder.group({
      'userEmail': [null, [Validators.required, Validators.pattern(emailregex)]],
      'userName': [null, Validators.required],
      'userContactNo': [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
      'userComment': [null, Validators.required]
    });
  }


  messageSend() {
    this.JoinAndClose();
    this.spinner.show()
    let contactUsDetails: any = {
      name: this.contactUsForm.get('userName').value,
      email: this.contactUsForm.get('userEmail').value,
      contact: this.contactUsForm.get('userContactNo').value,
      message: this.contactUsForm.get('userComment').value
    }
    this.userBackEndService.contactUs(contactUsDetails).subscribe(res => {
      if (res.success) {
        this.spinner.hide()
        this.contactFormPopup();
        CommonMethods.opensweetalert(res.message)
        MyRoutingMethods.gotoHome(this.router)
      }
      else {
        CommonMethods.opensweetalertError(res.message);
      }
    });
  }

  /**
   * create delivery data for booking
   */
  setBookingData(){
    let pickupAddress:any = {};
    let _pickupApartment = this.pickupApartment == '' ? '' : '#'+this.pickupApartment+', ';
    pickupAddress.formattedAddress = _pickupApartment + this.pickUpLocationName;
    pickupAddress.lat = this.origin.lat();
    pickupAddress.lng = this.origin.lng();

    let deliveryAddress:any = {};
    let _deliveryApartment = this.deliveryApartment == '' ? '' : '#'+this.deliveryApartment+', ';
    deliveryAddress.formattedAddress = _deliveryApartment + this.destinationLocationName;
    deliveryAddress.lat = this.destination.lat();
    deliveryAddress.lng = this.destination.lng();

    let contactDetails:any = {
      name: this.formGroup.get('name').value,
      email: this.formGroup.get('email').value,
      phone: this.formGroup.get('mobileNumber').value
    };

    this.bookingData.user = MyCookies.getId(this.cookiesSerive);
    this.bookingData.amount = parseFloat(this.priceForDelivery.match('[\\d.]+')[0]);
    this.bookingData.pickUpAddress = pickupAddress;
    this.bookingData.deliveryAddress = deliveryAddress;
    this.bookingData.itemList = this.selectedItemList;
    this.bookingData.rightNow = this.hasRightNowBooking;
    this.bookingData.timeSlot = this.selectedTimeSlot;
    this.bookingData.bookingDate = this.selectedDate.getTime();
    this.bookingData.contact_details = contactDetails;
    this.bookingData.special_instructions = this.formGroup.get('any_special_instruction').value;
  }
}
