import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductComponent } from './product/product.component';
import { CardsComponent } from './cards/cards.component';
import { ProductPaymentComponent } from './product-payment/product-payment.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'payment', component: ProductPaymentComponent},
  {path: 'calculator', component: CalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
