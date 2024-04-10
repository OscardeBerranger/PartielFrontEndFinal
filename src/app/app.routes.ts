import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./authentication/login/login.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {ScannerComponent} from "./scanner/scanner.component";
import {CartComponent} from "./cart/cart.component";
import {PaymentComponent} from "./payment/payment.component";
import {AfterPaymentAnimationComponent} from "./after-payment-animation/after-payment-animation.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path:'login',
    component: LoginComponent
  },{
    path:'register',
    component: RegisterComponent
  },{
    path:'scanner',
    component: ScannerComponent
  },{
    path:'cart',
    component: CartComponent
  },{
    path:'',
    component: HomeComponent
  },{
    path:'payment',
    component: PaymentComponent
  },{
    path:'home',
    component: HomeComponent
  },{
    path:'afterpayment',
    component: AfterPaymentAnimationComponent
  },
];
