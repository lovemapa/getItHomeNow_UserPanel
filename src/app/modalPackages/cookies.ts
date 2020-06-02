import { CommonMethods } from '../utillpackage/common-method';

export class CookiesModel {
    public _id: string;
    public firstname: string;
    public lastName: string;
    public email: string;
    public token: string;
    public profilePic: any;
    public contact: string;
    public address: string;
    public city: string;
    public state: string;
    public country : string;
    public zip: string;

    constructor(user: any) {
        this._id = user._id;
        this.firstname = user.firstName;
        this.lastName =  user.lastName;
        this.email = user.email;
        this.token = user.token;
        this.profilePic = user.profilePic;
        this.contact = user.contact;
        this.address = user.address;
        this.city = user.city;
        this.state = user.state;
        this.country = user.country;
        this.zip = user.zip;
    }
}
