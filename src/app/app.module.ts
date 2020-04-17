import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AosToken, aos } from './aos';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavbarComponent } from './componentPackage/navbar/navbar.component';
import { HomeComponent } from './componentPackage/home/home.component';
import { AdvertismentsComponent } from './componentPackage/advertisments/advertisments.component';
import { ContactusComponent } from './componentPackage/contactus/contactus.component';
import { FullComponent } from './layout/full/full.component';
import { FooterComponent } from './componentPackage/footer/footer.component';
import { FaqComponent } from './componentPackage/faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdvertismentsComponent,
    ContactusComponent,
    FullComponent,
    FooterComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CarouselModule
  ],
  providers: [
    { provide: AosToken, useValue: aos },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
