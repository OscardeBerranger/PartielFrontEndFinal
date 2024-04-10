import {Inject, Injectable} from '@angular/core';
import {GlobalVariables} from "../GlobalVariables";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private http = Inject(HttpClient)
  private router = Inject(Router)
  constructor() { }

  pay(object: any){
    this.http.post(GlobalVariables.baseUrl+"/order/makeorder",object).subscribe({
        next: (response: any) => {
          console.log(response)
          this.router.navigate(['/'])
        },
      }
    )
  }
}
