import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
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
  lat: number;
  lng: number;
  private geoCoder;
  destination: any;
  origin: any;
  selectedLocationIds: Array<any>;
  // json = require('../../../1assets/arraylocation/location.json');


  @ViewChild('search', { static: true }) searchElementRef: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader, public ngZone: NgZone, public userBackEndService: UserpanelServiceService) {
    this.origin = "";
    this.selectedLocationIds = [];
    this.loadMap()
    this.getSelectedLocationIds();
  }

  ngOnInit(): void {

  }



  getSelectedLocationIds() {
    this.userBackEndService.getSelectedLocationsId().subscribe(responseData => {
      // CommonMethods.showconsole(this.Tag,"Selected arary:- "+JSON.stringify(responseData))
      this.selectedLocationIds = responseData
    });

  }

  loadMap() {
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {

      });
      this.origin = new google.maps.LatLng(
        30.7333148,
        76.7794179
      );
      this.destination = new google.maps.LatLng(
        30.3752011,
        76.782122
      );
      let distance: any = google.maps.geometry.spherical.computeDistanceBetween(this.origin, this.destination);
      CommonMethods.showconsole("Distance:- ", distance);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // let place = autocomplete.getPlace();
          let place = autocomplete.getPlace();
          // var place = autocomplete.getPlace();



          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          let found = this.selectedLocationIds.filter(element => element.place_Id == place.place_id && element.id == place.id)
          if (found.length != 0) {
            CommonMethods.showconsole(this.Tag, "IN Found")
          } else {
            CommonMethods.showconsole(this.Tag, "not Found")
          }
          CommonMethods.showconsole(this.Tag, "Found:- " + found)
          CommonMethods.showconsole("place without stringfy:- ", place)
          //  CommonMethods.showconsole(this.Tag,"place:- "+JSON.stringify(place) )

          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          CommonMethods.showconsole(this.Tag, "lat " + this.lat)
          CommonMethods.showconsole(this.Tag, "long " + this.lng)
        });
      });

    });


  }

  // calculate the distances from point1 to point2
  calculateDistance(point1, point2) {
    const p1 = new google.maps.LatLng(
      point1.lat,
      point1.lng
    );
    const p2 = new google.maps.LatLng(
      point2.lat,
      point2.lng
    );
    return (
      google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000
    ).toFixed(2);
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
