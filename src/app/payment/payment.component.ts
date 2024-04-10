import {Component, inject, Inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "../navbar/navbar.component";
import {PaymentService} from "../payment.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  private service = inject(PaymentService);
  protected router = inject(Router)
  protected handleClick(form: any){
    this.service.pay(form.value)
  }
  protected handlePaymentClick(form: any){
    localStorage.removeItem('cart');
    this.router.navigate(['/afterpayment'])
  }
}
