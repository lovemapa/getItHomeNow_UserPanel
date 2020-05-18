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
  lat: number=0;
  lng: number=0;
  private geoCoder;
  destination: any;
  origin: any;
  modalReference: NgbModalRef;
  selectedLocationIds: Array<any>;
  itemList:Array<any>;
  @ViewChild('search', { static: true }) searchElementRef: ElementRef;
  @ViewChild('modalDiaolg', { static: true }) modalConent: NgbModal;
  @ViewChild('distanceModal', { static: true }) distanceModal: NgbModal;
  pickupLocation = true;
  destinationboolean = false;
  textboxLabel:string;
  textBoxPLaceBolder:string
  iconDisplay:string
  pickUpLocationName:string;
  temparyNameDesination:string
  destinationLocationName:string;
  selectedItemList:Array<any>
  searchingValue:string

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
    this.selectedLocationIds = [];
    this.itemList = [];
    this.selectedItemList = [];
    this.textboxLabel="Pick Up Address";
    this.textBoxPLaceBolder="Enter PickUp Address"
    this.iconDisplay="fa fa-arrow-circle-up";
    if(this.itemList.length == 0)
    {
      this.loadMap()
      this.getSelectedLocationIds();
    }


   
  }

  ngOnInit(): void {

  }

/**Get All Selected Location List */

  getSelectedLocationIds() {
    this.userBackEndService.getSelectedLocationsId().subscribe(responseData => {
      // CommonMethods.showconsole(this.Tag,"Selected arary:- "+JSON.stringify(responseData))
      this.selectedLocationIds = responseData
    });

  }

 /**Location Modal Error Show */
  openModal() {
    this.modalReference = this.modalService.open(this.modalConent,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'custom-class',
        centered: true
      });
    //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
  }

  /**Distance Modal Error Show */
  openModalDistanceCheck() {
    this.modalReference = this.modalService.open(this.distanceModal,
      {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'custom-class',
        centered: true
      });
    //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
  }

/**Loading Map */

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
          let found = this.selectedLocationIds.filter(element => element.place_Id == place.place_id && element.id == place.id)
          if (found.length != 0) {
            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            CommonMethods.showconsole(this.Tag, "lat " + this.lat)
            CommonMethods.showconsole(this.Tag, "long " + this.lng)
            if(this.pickupLocation == true)
            {
                this.pickUpLocationName =place.formatted_address;
            }else{
              this.temparyNameDesination =place.formatted_address;
            }
            CommonMethods.showconsole( "Plcae:- " ,this.pickUpLocationName)
            CommonMethods.showconsole( "Plcae:- " ,this.destinationLocationName)
            this.toggelNextBtn()
          } else {
            this.openModal();
            // this.openModalDistanceCheck();
          }
        });
      });

    });


  }

/**Set Current Location */
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
 * 
 * close Modal Function 
 */
  JoinAndClose() {
    this.modalReference.close();
  }

/**REturn Class NAme Of Search Icon into Map  */
  getReturnClass(className){
    return className;
  }


  gotoBack() {

  }

/**Next Function */

  gotoNext() {

    if (this.pickupLocation == true) {

      this.origin = new google.maps.LatLng(
        this.lat,
        this.lng
      );
      this.pickupLocation = false;
      this.destinationboolean = true;
     
      this.searchElementRef.nativeElement.value ="";
      this.textboxLabel="Delivery  Address";
      this.textBoxPLaceBolder="Enter Delivery Address"
      this.iconDisplay="fa fa-arrow-circle-down";
    } else if (this.destinationboolean == true) {
  
      this.destination = new google.maps.LatLng(
        this.lat,
        this.lng
      );
      let totalDisTanceintoMiles="";
      CommonMethods.showconsole(this.Tag,"oriogin"+JSON.stringify(this.origin) )
      CommonMethods.showconsole("Destination", JSON.stringify(this.destination) )
      let calculateDistanceByRoadservice = new google.maps.DistanceMatrixService().getDistanceMatrix({ 'origins': [this.origin], 'destinations': [this.destination], travelMode: 'DRIVING','unitSystem' : google.maps.UnitSystem.IMPERIAL }, (results: any) => {
        console.log('distancia (mts) -- ', results.rows[0].elements[0].distance?.text, results);
        totalDisTanceintoMiles =results.rows[0].elements[0].distance?.text, results;
        //  CommonMethods.showconsole(this.Tag,"Show DistAnce Into")
      });
      if(totalDisTanceintoMiles > "26"){
         this.openModalDistanceCheck(); 
      }else{
        this.destinationLocationName =this.temparyNameDesination;
        this.destinationboolean=false
        this.userBackEndService.getItemLists().subscribe( responseData=>{
             CommonMethods.showconsole(this.Tag,"Show Item List:- "+JSON.stringify(responseData));
            this.itemList=responseData;
            })
      }
    }else{

    }
  }

  /**Reset All THe Values Function */

  clickReset() {
   this.pickupLocation=true;
   this.destinationboolean=false;
   this.origin="";
   this.destination="";
   this.pickUpLocationName="";
   this.itemList=[];
   this.temparyNameDesination="";
   this.destinationLocationName="";
   this.searchElementRef.nativeElement.value="";
   this.textboxLabel="Pick Up Address";
    this.textBoxPLaceBolder="Enter PickUp Address"
    this.iconDisplay="fa fa-arrow-circle-up";
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
//   toggelNextBtn():boolean{
//     if(this.searchElementRef.nativeElement.value.length != 0){
//         return false;
//     }
//     if(this.selectedItemList.length>0){
//       return false;
//     }
//     return true;
// }


searching(searchingValue:string){
   CommonMethods.showconsole("Value:- ",searchingValue);
   let found = [];
  //  setTimeout(() => {
    this.itemList.forEach(element =>{
      found.push(element.item_list.filter(data => data.item_Name.toUpperCase().includes(searchingValue.toUpperCase())));
    });   
        
    console.log("fot",found, searchingValue);
  //  },2000 );
  

  }

}
