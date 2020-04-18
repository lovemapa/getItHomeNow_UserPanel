import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MyConstants } from '../utillpackage/constant';

@Injectable({
  providedIn: 'root'
})
export class UserpanelServiceService {
  private getAdvertisementUrl: string = MyConstants.BASEURL + "user/getAdvertisments?name=";
  
  constructor(private http: HttpClient) { }

  /**
    * mw=ethod to create new advertisement
    * @param searchString string to search in advertisements
  */
 getAdvertisement(searchString: string): Observable<any> {
  //for setting token in headers
  let searchurl:string='';
  searchurl=this.getAdvertisementUrl+searchString;
  return this.http.get(searchurl).pipe(map(data=>{return data;}));
}
}
