import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { GoogleMap } from '@agm/core/services/google-maps-types';
declare var google: any;
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  Tag="DeliveryComponent";
  lat: number;
  lng: number ;
  private geoCoder;
  destination: any;
  origin: any;
  @ViewChild('search', { static: true }) searchElementRef: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader,public ngZone:NgZone) { 
    this.origin ="";
    this.loadMap()
  }

  ngOnInit(): void {
  //   this.origin = { 
  //     lat: 24.799448, 
  //     lng: 120.979021 
  // };
  // this.destination = { 
  //     lat: 24.799524, 
  //     lng: 120.975017 
  // };
  }


  loadMap() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {

      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // let place = autocomplete.getPlace();
          let place  =  autocomplete.getPlace();
          // var place = autocomplete.getPlace();



          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
           CommonMethods.showconsole("place without stringfy:- ",place )
           CommonMethods.showconsole(this.Tag,"place:- "+JSON.stringify(place) )

          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        });
      });

    });
  
  }
  


   setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        // this.zoom = 16;
        // this.getAddress( this.addSubStoreModel.lat, this.addSubStoreModel.lng);
        this.origin = { lat: position.coords.latitude, lng: position.coords.longitude };
      });
    }
  }

}
