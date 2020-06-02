import { CookieService } from "ngx-cookie-service";
import { CookiesModel } from 'src/app/modalPackages/cookies';



export class MyCookies {
 
    static saveLoginDataInCookies(cookieService: CookieService, cookiesModel:CookiesModel) {
        cookieService.set('_id',cookiesModel._id,this.getExpiryTime(),'');
        cookieService.set('email',cookiesModel.email,this.getExpiryTime(),'');
        cookieService.set('token',cookiesModel.token,this.getExpiryTime(),'');
        cookieService.set('profilePic',cookiesModel.profilePic,this.getExpiryTime(),'');
        cookieService.set('contact',cookiesModel.contact,this.getExpiryTime(),'');
        cookieService.set('firstName',cookiesModel.firstname,this.getExpiryTime(),'');
        cookieService.set('lastName',cookiesModel.lastName,this.getExpiryTime(),'');
        cookieService.set('address',cookiesModel.address,this.getExpiryTime(),'');
        cookieService.set('city',cookiesModel.city,this.getExpiryTime(),'');
        cookieService.set('state',cookiesModel.state,this.getExpiryTime(),'');
        cookieService.set('country',cookiesModel.country,this.getExpiryTime(),'');
        cookieService.set('zip',cookiesModel.zip,this.getExpiryTime(),'');
        
    }
  

    static checkLoginStatus(cookieService: CookieService): boolean {
        var cookieExists: boolean = cookieService.check('_id');
        cookieExists = cookieService.get('_id') != "";
        if (cookieExists) {
            cookieExists = cookieService.check('email');
            cookieExists = cookieService.get('email') != "";
            if (cookieExists) {
                cookieExists = cookieService.check('token');
                cookieExists = cookieService.get('token') != "";
                if (cookieExists) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    static getId(cookieService: CookieService): string {
        return cookieService.get('_id');
    }
    static getEmaild(cookieService: CookieService): string {
        return cookieService.get('email');
    }
    static getToken(cookieService: CookieService): string {
        return cookieService.get('token');
    }
    static getProfileIMage(cookieService: CookieService): string {
        return cookieService.get('profilePic');
    }
    static getUserFistName(cookieService: CookieService): string {
        return cookieService.get('firstName');
    }
    static getUseLastName(cookieService: CookieService): string {
        return cookieService.get('lastName');
    }
    static getUsercontact(cookieService: CookieService): string {
        return cookieService.get('contact');
    }
    static getUserAddress(cookieService: CookieService): string {
        return cookieService.get('address');
    }
    static getUsercity(cookieService: CookieService): string {
        return cookieService.get('city');
    }
    static getUserstate(cookieService: CookieService): string {
        return cookieService.get('state');
    }
    static getUserCountry(cookieService: CookieService): string {
        return cookieService.get('country');
    }
    static getUserzip(cookieService: CookieService): string {
        return cookieService.get('zip');
    }
       

    static getExpiryTime() {
        let date = new Date();
        date.setDate(date.getDate() +1);
        return date;
    }

    static deletecookies(cookieService: CookieService) {
        cookieService.deleteAll();

    }
}