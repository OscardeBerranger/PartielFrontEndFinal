import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GlobalVariables} from "../GlobalVariables";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http = inject(HttpClient)
  private router = inject(Router)
  constructor() { }


  addToMyCart(urlSuffix: string){
    this.http.get<any>(GlobalVariables.baseUrl+urlSuffix, ).subscribe({
    })
  }

  getMyCart():any {
    this.http.get(GlobalVariables.baseUrl+'/api/cart').subscribe({
      next: (response: any)=>{
        console.log(response);
      }
    });
  }

  validateCart(){
    let cart = sessionStorage.getItem("cart");
    this.http.post(GlobalVariables.baseUrl+'/api/order/make', cart).subscribe({
      next: (response: any)=>{
        console.log(response);
      }
    })
  }
}
