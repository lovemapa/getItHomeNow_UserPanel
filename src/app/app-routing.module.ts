import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layout/full/full.component'
import { BlankComponent } from './layout/blank/blank.component';
import { AdvertismentsComponent } from './componentPackage/advertisments/advertisments.component'
import { BlankLoginandsignupComponent } from './layout/blank-loginandsignup/blank-loginandsignup.component'
import { LoginSignupComponent } from './componentPackage/login-signup/login-signup.component';
import { ProfileshowComponent } from './componentPackage/profileshow/profileshow.component';
import { DeliveryComponent } from './componentPackage/delivery/delivery.component';
import { PaymentGatewayComponent} from './componentPackage/payment-gateway/payment-gateway.component'
import { from } from 'rxjs';
const routes: Routes = [
  { path: '', component: FullComponent },
  { path: '', component: BlankComponent,
    children: [
      { path: 'promotions', component: AdvertismentsComponent },
      { path: 'profile/setting', component: ProfileshowComponent },
      { path: 'delivery', component: DeliveryComponent },
    ]
  },
  { path: '', component: BlankLoginandsignupComponent,
    children: [
      { path: 'login', component: LoginSignupComponent },
      { path: 'paymentgateway', component: PaymentGatewayComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    useHash : false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
