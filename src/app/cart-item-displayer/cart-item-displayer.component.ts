import {Component, Input} from '@angular/core';
import {ProductItem} from "../product-item";

@Component({
  selector: 'app-cart-item-displayer',
  standalone: true,
  imports: [],
  templateUrl: './cart-item-displayer.component.html',
  styleUrl: './cart-item-displayer.component.css'
})
export class CartItemDisplayerComponent {
  @Input() cartItem!: ProductItem
  constructor() {
  }
}
