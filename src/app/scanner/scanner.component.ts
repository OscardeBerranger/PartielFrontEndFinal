import {Component, inject} from '@angular/core';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {CartService} from "../cart.service";
import {Product} from "../product";
import {ProductItem} from "../product-item";
import {Cart} from "../cart";
import {NavbarComponent} from "../navbar/navbar.component";


@Component({
  selector: 'app-scanner',
  standalone: true,
  imports: [
    NgxScannerQrcodeModule,
    NgIf,
    AsyncPipe,
    JsonPipe,
    NavbarComponent
  ],
  templateUrl: './scanner.component.html',
  styleUrl: './scanner.component.css'
})
export class ScannerComponent {
  private service = inject(CartService)


  addToCart(data: any){
    let cart: Cart|null = null
    if (localStorage.getItem('cart')){
      cart = JSON.parse(localStorage.getItem('cart') as string) as Cart
    }

    let usable = data.value.slice(14)
    let product: Product = {
      id: usable.slice(0, 1),
      name: "saucisson",
      price: 7
    }
    let productItem: ProductItem

    if (cart){
      for (let item of cart.items){
        if(item.product.id == product.id){
          item.quantity = Number(item.quantity)+Number(usable.slice(2))
        }else {
          item.quantity = Number(usable.slice(2))
        }
      }
    }else {
      productItem = {
        product: product,
        quantity: Number(usable.slice(2))
      }
      cart = {
        items: [
          productItem
        ]}
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }



  showCart(){
    console.log(JSON.parse(localStorage.getItem('cart') as string) as Cart);
  }

  validateCart(){
    this.service.validateCart()
  }
}
