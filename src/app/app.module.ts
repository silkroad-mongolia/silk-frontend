import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './navigation/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { CardsComponent } from './cards/cards.component';
import { ProductPaymentComponent } from './product-payment/product-payment.component';
import { CalculatorComponent } from './calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ProductComponent,
    CardsComponent,
    ProductPaymentComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    SlideshowModule,
    ReactiveFormsModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    GallerizeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
