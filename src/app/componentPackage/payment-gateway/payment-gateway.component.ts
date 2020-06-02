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
        color: '#9ea4a9',
        lineHeight: '46px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '16px',
        '::placeholder': {
          color: '#9ea4a9'
        }
      }
    },
    hidePostalCode: true,
  };


  //   var card = elements.create('card', {
  //     iconStyle: 'solid',
  //     style: {
  //       base: {
  //         iconColor: '#c4f0ff',
  //         color: '#fff',
  //         fontWeight: 500,
  //         fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  //         fontSize: '16px',
  //         fontSmoothing: 'antialiased',

  //         ':-webkit-autofill': {
  //           color: '#fce883',
  //         },
  //         '::placeholder': {
  //           color: '#87BBFD',
  //         },
  //       },
  //       invalid: {
  //         iconColor: '#FFC7EE',
  //         color: '#FFC7EE',
  //       },
  //     },
  //   });
  //   card.mount('#example1-card');

  //   registerElements([card], 'example1');
  // })();


  elementsOptions: ElementsOptions = {
    locale: 'en',

  };

  stripeTest: FormGroup;
  @Input() name;
  constructor(
    private formBuilder: FormBuilder,
    private stripeService: StripeService,
    public ngbModalService: NgbModal, public userBackEndService: UserpanelServiceService,
    public spinner: NgxSpinnerService, public activemodal: NgbActiveModal, public cookiesService: CookieService) {

    CommonMethods.showconsole(this.Tag, "USer Data :- " + this.name)

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
        MyCookies.getUserzip(this.cookiesService) != ""
      ) {

        this.stripeTest = this.formBuilder.group({

          'name': [username, Validators.required],
          'address_line1': [MyCookies.getUserAddress(this.cookiesService), Validators.required],
          'address_city': [MyCookies.getUsercity(this.cookiesService), Validators.required],
          'address_state': [MyCookies.getUserstate(this.cookiesService), Validators.required],
          'address_zip': [MyCookies.getUserzip(this.cookiesService), Validators.required],
          'address_country': [null, Validators.required],
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
        'address_zip': [null, [Validators.required,Validators.pattern('[0-9]{10}')]],
        'address_country': [null, Validators.required],
      });
    }

  }

  // getErrorEmail() {
  //   return this.stripeTest.get('email').hasError('required') ? 'Email address is required' :
  //     this.stripeTest.get('email').hasError('pattern') ? 'Email address is not valid' : '';

  // }

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
    // this.modalRef.close()


    const name = this.stripeTest.get('name').value;
    const address_line1 = this.stripeTest.get('address_line1').value;
    const address_city = this.stripeTest.get('address_city').value;
    const address_state = this.stripeTest.get('address_state').value;
    const address_zip = this.stripeTest.get('address_zip').value;
    const address_country = this.stripeTest.get('address_country').value;
    // const address = this.stripeTest.get('name').value;
    // const name = this.stripeTest.get('name').value;
    // const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name, address_line1, address_city, address_state, address_zip, address_country })
      .subscribe(result => {
        if (result.token) {
          this.spinner.show();
          console.log(result.token.id);
          let paymentData: any = {};
          paymentData.amount = this.name.price;
          paymentData.currency = "inr";
          paymentData.receipt_email = this.name.email;
          paymentData.token = result.token.id;
          this.userBackEndService.makePaymentFinal(paymentData).subscribe((responseData) => {
            this.spinner.hide();
            if (responseData.success) {
              this.activemodal.close('success');
            } else {
              CommonMethods.opensweetalertError(responseData.message)
            }
          });
        } else if (result.error) {
          this.spinner.hide();
          console.log(result.error.message);
          CommonMethods.opensweetalertError(result.error.message)
        }
      });
  }


  cardUpdated(result) {
    this.element = result.element;
    this.complete = result.card.complete;
    this.error = undefined;
  }

  // keyUpdated() {
  //   this._stripe.changeKey(this.stripeKey);
  // }



  paymentModal(modalContent) {
    this.modalRef = this.ngbModalService.open(modalContent, {
      ariaLabelledBy: 'modal-basic-title',
      // windowClass: 'custom-class',
      centered: true
    });
  }

  joincolse() {
    this.modalRef.close();
  }


  /**
   * show confirmation popup before resetting data
   */
  // opensweetalert() {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "Once you click , you will not be able to recover this imaginary file!",
  //     icon: 'warning',
  //     confirmButtonText: 'Yes',
  //     showCancelButton: true,
  //     dangerMode: true,
  //   }).then((willDelete) => {
  //     if (willDelete.value) {
  //       this.dataReset();
  //     } else {

  //     }
  //   });
  // }

  closeModal() {
    this.activemodal.close("");
  }

}
