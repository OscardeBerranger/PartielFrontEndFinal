import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {Cart} from "../cart";
import {ProductItem} from "../product-item";
import {CartItemDisplayerComponent} from "../cart-item-displayer/cart-item-displayer.component";
import {NgForOf} from "@angular/common";
import {NavbarComponent} from "../navbar/navbar.component";
import {Product} from "../product";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CartItemDisplayerComponent,
    NgForOf,
    NavbarComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private service: CartService = inject(CartService)
  private router = inject(Router);
  private cart: Cart|null = null
  protected items:ProductItem[] = []
  constructor(private cartService: CartService) {
    if (!localStorage.getItem('token')){
      this.router.navigate(['/login'])
    }else {
      this.cart = JSON.parse(localStorage.getItem('cart') as string) as Cart
      this.items = this.cart?.items
    }
  }




  validateCart(){
    this.router.navigate(['/payment'])
  }
  emptyCart(){
    localStorage.removeItem('cart');
    window.location.reload();
  }


}
