import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { StripeService, Elements, Element as StripeElement, ElementsOptions, StripeCardComponent, ElementOptions } from "ngx-stripe";
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonMethods } from 'src/app/utillpackage/common-method';
import { UserpanelServiceService } from 'src/app/backendServices/userpanel-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { MyCookies } from 'src/app/utillpackage/utillpackage/my-cookies';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  Tag = "";
  modalRef: NgbModalRef

  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  element: StripeElement;
  error: any;
  complete = false;
  cardOptions: ElementOptions = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#9ea4a9',
        color: '#212529',
        lineHeight: '46px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: '#212529'
        }
      }
    },
    hidePostalCode: true,
  };

  elementsOptions: ElementsOptions = {
    locale: 'en',
  };

  stripeTest: FormGroup;
  @Input() bookingDetails;
  
  constructor(
    private formBuilder: FormBuilder,
    private stripeService: StripeService,
    public ngbModalService: NgbModal, public userBackEndService: UserpanelServiceService,
    public spinner: NgxSpinnerService, public activemodal: NgbActiveModal, public cookiesService: CookieService) {
  }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {

    if (MyCookies.checkLoginStatus(this.cookiesService) == true) {
      var username = MyCookies.getUserFistName(this.cookiesService) + " " + MyCookies.getUseLastName(this.cookiesService)
      if (
        MyCookies.getUserAddress(this.cookiesService) != "" &&
        MyCookies.getUsercity(this.cookiesService) != "" &&
        MyCookies.getUserstate(this.cookiesService) != "" &&
        MyCookies.getUserzip(this.cookiesService) != "" &&
        MyCookies.getUserCountry(this.cookiesService) != ""
      ) {

        this.stripeTest = this.formBuilder.group({
          'name': [username, Validators.required],
          'address_line1': [MyCookies.getUserAddress(this.cookiesService), Validators.required],
          'address_city': [MyCookies.getUsercity(this.cookiesService), Validators.required],
          'address_state': [MyCookies.getUserstate(this.cookiesService), Validators.required],
          'address_zip': [MyCookies.getUserzip(this.cookiesService), Validators.required],
          'address_country': [MyCookies.getUserCountry(this.cookiesService), Validators.required],
        });

      } else {
        this.stripeTest = this.formBuilder.group({
          'name': [username, Validators.required],
          'address_line1': [null, Validators.required],
          'address_city': [null, Validators.required],
          'address_state': [null, Validators.required],
          'address_zip': [null, Validators.required],
          'address_country': [null, Validators.required],
        });
      }

    } else {
      this.stripeTest = this.formBuilder.group({
        'name': [null, Validators.required],
        'address_line1': [null, Validators.required],
        'address_city': [null, Validators.required],
        'address_state': [null, Validators.required],
        'address_zip': [null, [Validators.required,Validators.pattern('[0-9]{5}')]],
        'address_country': [null, Validators.required],
      });
    }

  }

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
  _keyPresscharacter(event: any) {
    const pattern = /^[a-zA-Z\s]*$/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }


 



  buy() {
    const name = this.stripeTest.get('name').value;
    const address_line1 = this.stripeTest.get('address_line1').value;
    const address_city = this.stripeTest.get('address_city').value;
    const address_state = this.stripeTest.get('address_state').value;
    const address_zip = this.stripeTest.get('address_zip').value;
    const address_country = this.stripeTest.get('address_country').value;
    this.stripeService
      .createToken(this.card.getCard(), { name, address_line1, address_city, address_state, address_zip, address_country })
      .subscribe(result => {
        if (result.token) {
          this.spinner.show();
          this.bookingDetails.token = result.token.id;
          console.log("this.bookingDetails :", this.bookingDetails);
          this.userBackEndService.makePaymentFinal(this.bookingDetails).subscribe((responseData) => {
            this.spinner.hide();
            if (responseData.success) {
              this.activemodal.close('success');
            } else {
              CommonMethods.opensweetalertError(responseData.message)
            }
          },error => {
            this.spinner.hide();
            CommonMethods.opensweetalertError("Something went wrong! Please try again later!")
          });
        } else if (result.error) {
          this.spinner.hide();
          CommonMethods.opensweetalertError(result.error.message)
        }
      });
  }


  cardUpdated(result) {
    this.element = result.element;
    this.complete = result.card.complete;
    this.error = undefined;
  }

  paymentModal(modalContent) {
    this.modalRef = this.ngbModalService.open(modalContent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    });
  }

  joincolse() {
    this.modalRef.close();
  }

  closeModal() {
    this.activemodal.close("");
  }

}
