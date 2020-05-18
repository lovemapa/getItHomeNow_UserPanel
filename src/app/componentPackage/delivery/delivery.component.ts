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
  searchItemList:Array<any>
  searchingValue:string
  dateList:Array<any>;
  count:number;
  previousId:any

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
    this.searchItemList = [];
    this.dateList=[];
    this.count=0
    this.textboxLabel="Pick Up Address";
    this.textBoxPLaceBolder="Enter PickUp Address"
    this.iconDisplay="fa fa-arrow-circle-up";
    this.previousId="";
    if(this.itemList.length == 0)
    {
      this.loadMap()
      this.getSelectedLocationIds();
    }

    this.userBackEndService.getItemLists().subscribe( responseData=>{
      CommonMethods.showconsole(this.Tag,"Show Item List:- "+JSON.stringify(responseData));
     this.itemList=responseData;
     })

     this.getDateNextThree();
   
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
    if (this.itemList.length > 0) {
      this.itemList.forEach(item =>{
        item.item_list.forEach(data=>{
          if(data.quanity>0)
          {
            this.selectedItemList.push(data)

          }
         
        })
      })
      //  CommonMethods.showconsole(this.Tag,"Selected Value List- "+JSON.stringify(this.selectedItemList))
      return this.selectedItemList.length>0;
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
   this.searchItemList=[];
  //  setTimeout(() => {
    this.itemList.forEach(element =>{
      let data = element.item_list.filter(data => data.item_Name.toUpperCase().includes(searchingValue.toUpperCase()));
      console.log(data);
      if(data.length > 0 ){
        found = found.concat(data);
      }
      console.log("found", found)

    });   
        
    CommonMethods.showconsole(this.Tag,"fot"+JSON.stringify(found) );
    this.searchItemList=found;
    //  CommonMethods.showconsole(this.Tag,"Show Item List :- "+JSON.stringify( this.selectedItemList))
  //  },2000 );

  if(this.searchingValue.length == 0)
  {
      this.searchItemList=[];
      found=[]
  }
  

  }

  /**GEt Next Date  Function*/
  getDateNextThree(){
    this.dateList=[];
    var today = new Date();
    var weekday = ['Sunday', 'Monday', 'Tuesday', 
              'Wednesday', 'Thursday', 'Friday', 'Saturday' 
          ]; 
    var date = (today.getMonth()+1)+'/'+today.getDate();
    this.dateList.push(date);
    var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    var date2 = (tomorrow.getMonth()+1)+'/'+tomorrow.getDate();
    this.dateList.push(date2);
    var dayatom = new Date(tomorrow.getTime() + (24 * 60 * 60 * 1000));
    var date3 = (dayatom.getMonth()+1)+'/'+dayatom.getDate();
    this.dateList.push(date3);
     CommonMethods.showconsole(this.Tag,"Show Date Array :- "+JSON.stringify(this.dateList))
  }

/**Onclick Show count div Function  */

  clickOnShowCount(itemId:any,outerINdex:number){
    CommonMethods.showconsole(this.Tag,"SHow Id:- "+itemId+" "+"Outer Index:- "+outerINdex)
      var itemArray:Array<any> =this.itemList[outerINdex].item_list;
      CommonMethods.showconsole(this.Tag,"Showprevious Id:- "+this.previousId)
      if(this.previousId.length == 0){
        this.previousId=outerINdex;
      }
    
       for(var i=0;i<itemArray.length;i++)
       {
          if(itemArray[i].item_id == itemId )
          {
            CommonMethods.showconsole(this.Tag,"if is working ")
            itemArray[i].item_boolean= true;
          }else{
            itemArray[i].item_boolean= false;
          }
       }

       CommonMethods.showconsole(this.Tag,"previous:- "+this.previousId+' '+" cuurent index:- "+outerINdex)
       if( this.previousId != outerINdex)
       {
          CommonMethods.showconsole(this.Tag,"Value Not match:- "+this.previousId)
         var itemArrayFalse:Array<any> =this.itemList[this.previousId].item_list;
         for(var i=0;i<itemArrayFalse.length;i++)
         {
          itemArrayFalse[i].item_boolean= false;
         } 
         this.previousId=outerINdex;
       }
  }

  clicktoAddQunity(quanity:number){
    // let  quantity = this.itemList[outerIndex].item_list[innerIndex].quanity  
    // if(quantity == 0)
    // {
    //   this.count=0;
    //   this.count++;
    //   this.itemList[outerIndex].item_list[innerIndex].quanity=this.count;
    // }else{
    //   this.count =quantity;
    //   this.count++;
    //   this.itemList[outerIndex].item_list[innerIndex].quanity=this.count
    // }

    // if(this.selectedItemList.length == 0){
    //   this.selectedItemList.push( this.itemList[outerIndex].item_list[innerIndex])
    
    // }else{
    //   var itemid=this.itemList[outerIndex].item_list[innerIndex].item_id;
    //    for(var i=0;i<this.selectedItemList.length;i++)
    //    {
    //         if(this.selectedItemList[i].item_id == itemid )
    //         {
    //           this.selectedItemList[i].item_id=this.count;
    //         }
    //    }
    // }
    // CommonMethods.showconsole(this.Tag,"Show IMages:- "+JSON.stringify(this.selectedItemList))
    quanity = quanity+1;

 
  }

  clicktosubtractQunity(quanity:number){
    quanity = quanity-1;
    // let  quantity = this.itemList[outerIndex].item_list[innerIndex].quanity  
    // if(quantity != 0)
    // {
    //   this.count =quantity;
    //   this.count--;
    //   this.itemList[outerIndex].item_list[innerIndex].quanity=this.count;
    //   var itemid=this.itemList[outerIndex].item_list[innerIndex].item_id;
    //    for(var i=0;i<this.selectedItemList.length;i++)
    //    {
    //         if(this.selectedItemList[i].item_id == itemid )
    //         {
    //           this.selectedItemList[i].item_id=this.count;
    //         }
    //    }
    // }else{
    //   var itemid=this.itemList[outerIndex].item_list[innerIndex].item_id;
    //   for(var i=0;i<this.selectedItemList.length;i++)
    //   {
    //        if(this.selectedItemList[i].item_id == itemid )
    //        {
    //             this.selectedItemList.splice(i,1)
    //        }
    //   }
    // }
    
    // CommonMethods.showconsole(this.Tag,"Legth:- "+this.selectedItemList.length)
    // CommonMethods.showconsole(this.Tag,"Show IMages:- "+JSON.stringify(this.selectedItemList))
  }


}
