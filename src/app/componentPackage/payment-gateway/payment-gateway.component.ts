import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { StripeService, Elements, Element as StripeElement, ElementsOptions, StripeCardComponent, ElementOptions } from "ngx-stripe";
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonMethods } from 'src/app/utillpackage/common-method';
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
    hidePostalCode : true
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
    private stripeService: StripeService, public ngbModalService: NgbModal) {

    CommonMethods.showconsole(this.Tag, "USer Data :- " + this.name)

  }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    // let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.stripeTest = this.formBuilder.group({
      // 'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      // 'mobileNumber': [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
      'address_line1': [null,Validators.required],
      'address_city': [null,Validators.required],
      'address_state': [null,Validators.required],
      'address_zip': [null,Validators.required],
      'address_country': [null,Validators.required],
      // 'country': [null,Validators.required]
    });
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



  buy() {
    const name = this.stripeTest.get('name').value;
    // const address = this.stripeTest.get('name').value;
    // const name = this.stripeTest.get('name').value;
    // const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log(JSON.stringify(result.token));
          console.log(JSON.stringify(result));
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
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

}
