import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
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
  destinationRegion: string;
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
  buttonNameDataSection:any


  constructor(private mapsAPILoader: MapsAPILoader, public ngZone: NgZone, public userBackEndService: UserpanelServiceService,
    public modalService: NgbModal, public cookiesSerive: CookieService, public spinner: NgxSpinnerService,
    private formBuilder: FormBuilder) {
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
    this.buttonNameDataSection="selectbydatetime"


    if (this.itemList.length == 0) {
      this.loadMap()
      this.getSelectedLocationIds();
    }

    this.formGroup = formBuilder.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

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
    // this.itemList = itemListData;
    // this.getDateNextThree();
    // this.dateSelectedPage = true

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
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {

      });
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
              this.destinationRegion = element.region;
            }

          });
          if (found) {
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            if (this.pickupLocation == true) {
              this.pickUpLocationName = place.formatted_address;
            } else {
              this.temparyNameDesination = place.formatted_address;
            }
            this.toggelNextBtn();
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
      this.dateSelectedPage = false;
      this.spinner.show()
      this.searchingValue = "";
      this.searchItemList = [];
      this.itemList = itemListData;
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
      }, 1000);
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
      this.spinner.show();
      this.destination = new google.maps.LatLng(
        this.lat,
        this.lng
      );
      let totalDisTanceintoMiles: any;
      let calculateDistanceByRoadservice = new google.maps.DistanceMatrixService().getDistanceMatrix({ 'origins': [this.origin], 'destinations': [this.destination], travelMode: 'DRIVING', 'unitSystem': google.maps.UnitSystem.IMPERIAL }, (results: any) => {
        totalDisTanceintoMiles = results.rows[0].elements[0].distance?.text;
        if (parseFloat(totalDisTanceintoMiles.match('[\\d]+.[\\d]+')[0]) > 25) {
          if (this.destinationRegion == "South Region") {
            this.priceForDelivery = '$119/hr';
          }
          else if (this.destinationRegion == "Central Region") {
            this.priceForDelivery = '$149/hr';
          }
        }
      });
      if (this.destinationLocationName.length != 0 && this.temparyNameDesination.length == 0) {
        this.temparyNameDesination = this.destinationLocationName;
        this.searchElementRef.nativeElement.value = this.destinationLocationName;
      } else {
        this.destinationLocationName = this.temparyNameDesination;
      }
      this.itemList = itemListData;
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
      }, 1000);
    } else if (this.showItemPage && this.itemList.length != 0) {
      this.showItemPage = false;
      this.timearrayList = timedata;
      this.getDateNextThree();
      

        if(this.selecteddatebutton == true)
        {
             if(this.selectedDate != null)
             {
                 this.selectedDate=this.selectedDate;
             }else{
                 this.selectedDate=null;
             }
             this.rightNowButton=false
        }else{
          this.rightNowButton=true
        }

      this.dateSelectedPage = true;

    } else if (this.dateSelectedPage) {
      this.dateSelectedPage = false;
      this.formFieldshow = true;

    } else if (this.formFieldshow == true) {

      alert(JSON.stringify(this.formGroup.value))
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
    if (this.dateSelectedPage && this.selectedDate != null) {
      return false;
    }
    // if (this.formFieldshow && this.name.trim().length != 0 && this.email.trim().length != 0 && this.phonenumber.trim().length != 0) {
    //   CommonMethods.showconsole(this.Tag, "Function")
    //   return false;
    // }
    if (this.formFieldshow && this.formGroup.valid) {
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
    let today = new Date();
    if (today.getHours() > 20) {
      today.setDate(today.getDate() + 1);
    }
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

    // this.cookiesSerive.set("selected_productList", JSON.stringify(this.selectedItemList))

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
          this.timearrayList = timedata.filter(time => time.starting_Time >= timeSlotStartHour);
        }
        else {
          this.timearrayList = timedata;
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



  /** Form Input Validated */



  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'mobileNumber': [null, [Validators.required , Validators.min(9), Validators.max(10)]],
      'any_special_instruction': [null]
      // 'mobileNumber': [null, [Validators.required, Validators.pattern('[6-9]\\d{9}')]]
    });
  }









  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Email address is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Email address is not valid' : '';

  }

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }



  /**Click Method Selected date and right now button*/
  selctedDateCategory(buttonname:any){
    this.buttonNameDataSection=buttonname;
    if(buttonname == 'selectbydatetime' && this.selecteddatebutton == false)
    { 

      let newemptyvale:Date
      this.selectedDate=newemptyvale
      this.getDateNextThree()
      this.selecteddatebutton=true;
      this.rightNowButton=false
    }else{
      this.timearrayList=[]
      this.selectedTimeSlot=""
      this.selectedDate= new Date()
      this.selecteddatebutton=false;
      this.rightNowButton=true
    }

  }



    /**
   * Sweet Alert   Show    
   */
  opensweetalert() {
    Swal.fire({
      title: "Are you sure?",
      text: " you want to reset All changes will be lost!",
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this.dataReset();
      } else {
           CommonMethods.showconsole(this.Tag,"Else is working")
      }
    });
  }



  /**Data Reset */
dataReset()
{
  this.pickupLocation = true;
  this.destinationboolean = false;
  this.dateSelectedPage = false;
  this.selectedDate = null;
  // this.name = "";
  // this.email = "";
  // this.phonenumber = "";
  this.searchingValue=""
  this.formFieldshow = false;
  this.showFinallist = false
  this.dateList = [];
  this.origin = "";
  this.destination = "";
  this.selectedTimeSlot=""
  this.pickUpLocationName = "";
  this.itemList = [];
  this.selectedItemList = [];
  this.searchItemList=[];
  this.temparyNameDesination = "";
  this.destinationLocationName = "";
  this.searchElementRef.nativeElement.value = "";
  this.textboxLabel = "Pick Up Address";
  this.textBoxPLaceBolder = "Enter PickUp Address"
  this.iconDisplay = "fa fa-arrow-circle-up";
  this.setCurrentLocation()
}




}
