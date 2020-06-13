import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MyConstants } from '../utillpackage/constant';
import { MyCookies } from '../utillpackage/utillpackage/my-cookies';
import { CookieService } from 'ngx-cookie-service';
import { CookiesModel } from '../modalPackages/cookies';
import { LoginSignupModal } from '../modalPackages/login_signup';
import { CommonMethods } from '../utillpackage/common-method';

@Injectable({
  providedIn: 'root'
})
export class UserpanelServiceService {
  private getAdvertisementUrl: string = MyConstants.BASEURL + "user/getAdvertisments?name=";
  private contactUsUrl: string = MyConstants.BASEURL + "user/makeConsultant";
  private signupUrl: string = MyConstants.BASEURL + "user/register";
  private loginUrl: string = MyConstants.BASEURL + "user/login";
  private userForgotPasswordUrl: string = MyConstants.BASEURL + "user/forget-password";
  private updateUSerPwdUrl: string = MyConstants.BASEURL + "user/updateProfile";
  private paymentUrl: string = MyConstants.BASEURL + "payment/makePayment";


  private userId: string;
  private token: string;
  header: HttpHeaders;
  userIdRequestParam: HttpParams;

  private profilePic = new BehaviorSubject<string>('');
  readonly currentProfilePic = this.profilePic.asObservable();
  private profileName = new BehaviorSubject<string>('');
  readonly currentProfileName = this.profileName.asObservable();

  constructor(private http: HttpClient, public cookiesServices: CookieService) { }


  setCurrentProfilePic(profilePicUrl: string) {
    this.profilePic.next(profilePicUrl);
  }
  setCurrentProfileName(profileName: string) {
    this.profileName.next(profileName);
  }

  getCurrentProfilePic(): Observable<string> {
    return this.profilePic.asObservable();
  }


  /**
    * mw=ethod to create new advertisement
    * @param searchString string to search in advertisements
  */
  getAdvertisement(searchString: string, pageNo: Number): Observable<any> {
    //for setting token in headers
    let searchurl: string = '';
    searchurl = this.getAdvertisementUrl + searchString + "&page=" + pageNo;;
    return this.http.get(searchurl).pipe(map(data => { return data; }));
  }

  /**
   * method to send contact us detail via mail
   * @param contactUsData 
   */
  contactUs(contactUsData: any): Observable<any> {
    return this.http.post(this.contactUsUrl, contactUsData);
  }
  /**
   * method to send contact us detail via mail
   * @param contactUsData 
   */
  signUp(signupData: any): Observable<any> {
    return this.http.post(this.signupUrl, signupData);
  }

  /**
   * method to login for admin
   * @param username username to login
   * @param password password to login
   */
  userLoginAPI(userData: LoginSignupModal): Observable<any> {
    let data: any = {};
    data.email = userData.email;
    data.password = userData.password;
    return this.http.post<any>(this.loginUrl, data)
      .pipe(map(response => {
        // login successful if there's a token in thedata response
        if (response.success && response.user.token) {
          MyCookies.saveLoginDataInCookies(this.cookiesServices, new CookiesModel(response.user));
          // this.profilePic.next(this.cookiesServices.get('profilePic'));
        }
        return response;
      }));
  }


  /**
  * method to set token for header
  */
  setHeader() {
    this.userId = MyCookies.getId(this.cookiesServices);
    this.token = MyCookies.getToken(this.cookiesServices);
    this.header = new HttpHeaders().append('token', this.token);
    this.userIdRequestParam = new HttpParams().set("_id", this.userId);
  }

  /**
  * method for forgotpassword 
  * email id to send reset link
*/
  forgotPassword(email: string): Observable<any> {
    let data: any = {};
    data.email = email;
    return this.http.post<any>(this.userForgotPasswordUrl, data)
      .pipe(map(data => {
        return data;
      }));
  }

  /**
    * method to update admin details
    * @param userDetails admin details to update
   */
  updateDetails(userDetails: any): Observable<any> {
    //for setting token in headers
    this.setHeader();
    const httpOptions = {
      headers: this.header
    };
    return this.http.patch<any>(this.updateUSerPwdUrl, userDetails, httpOptions).pipe(map(response => {
      if (response.success && response.data.token) {
        MyCookies.saveLoginDataInCookies(this.cookiesServices, new CookiesModel(response.data));
      }
      return response;
    }));

  }

  /**Get  Selected Location */
  getSelectedLocationsId(): Observable<any> {
    return this.http.get('../../../assets/arraylocation/location.json');

  }
  /**Get  Show Item List Into Dilvery */
  getItemLists(): Observable<any> {
    return this.http.get('../../../assets/arraylocation/itemList.json');

  }

  /**
    * method to make a payment 
    * @param makePayment payemnt 
   */
  makePaymentFinal(makePayment: any): Observable<any> {

    CommonMethods.showconsole("payment DAta:- ", makePayment)
    return this.http.post<any>(this.paymentUrl, makePayment).pipe(map(response => {
      return response;
    }));

  }


}
