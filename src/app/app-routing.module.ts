import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layout/full/full.component'
import { BlankComponent } from './layout/blank/blank.component';
import{AdvertismentsComponent} from './componentPackage/advertisments/advertisments.component'
import{BlankLoginandsignupComponent}from'./layout/blank-loginandsignup/blank-loginandsignup.component'
import {LoginSignupComponent} from'./componentPackage/login-signup/login-signup.component';
import {ProfileshowComponent} from './componentPackage/profileshow/profileshow.component';
const routes: Routes = [

 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: FullComponent
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: 'promotions', component: AdvertismentsComponent },
      { path: 'profile/setting', component: ProfileshowComponent },
      // { path: 'privacy', component: PrivacyPolicyComponent },
      // { path: 'share/:name/:username', component: ShareComponent },
    ]

  },
  {
    path: '',
    component: BlankLoginandsignupComponent,
    children: [
      { path: 'login', component: LoginSignupComponent },
      // { path: 'privacy', component: PrivacyPolicyComponent },
      // { path: 'share/:name/:username', component: ShareComponent },
    ]

  },
  // { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
