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
   Tag="";
   modalRef:NgbModalRef
   
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
    }
  
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
    private fb: FormBuilder,
    private stripeService: StripeService,public ngbModalService :NgbModal) {

        CommonMethods.showconsole(this.Tag,"USer Data :- "+this.name)

    }
 
  ngOnInit() :void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }
 
  buy() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe(result => {
        if (result.token) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
          console.log( JSON.stringify(result.token) );
          console.log( JSON.stringify(result) );
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



  paymentModal(modalContent){
        this.modalRef = this.ngbModalService.open(modalContent,  {
          ariaLabelledBy: 'modal-basic-title',
          // windowClass: 'custom-class',
          centered: true
        });
  }

joincolse(){
  this.modalRef.close();
}

}
