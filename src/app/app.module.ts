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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './navigation/footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CardsComponent } from './cards/cards.component';
import { ProductPaymentComponent } from './product-payment/product-payment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth-interceptor';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';

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
    CalculatorComponent,
    CategoryComponent,
    ProductsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    SlideshowModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
