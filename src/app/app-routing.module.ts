import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductComponent } from './product/product.component';
import { CardsComponent } from './cards/cards.component';
import { ProductPaymentComponent } from './product-payment/product-payment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivateofficeComponent } from './privateoffice/privateoffice.component';
import { ProductorderComponent } from './productorder/productorder.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'product/:store/:id', component: ProductComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'payment', component: ProductPaymentComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/general', component: PrivateofficeComponent},
  {path: 'profile/order', component: ProductorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
