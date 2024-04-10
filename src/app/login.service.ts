import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GlobalVariables} from "../GlobalVariables";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient)
  private router = inject(Router)
  constructor() { }


  login(object: any){
    this.http.post<any>(GlobalVariables.baseUrl+"/api/login_check", object).subscribe({
      next: (response: any)=>{
        localStorage.setItem("token", response.token);
      }
    })
  }
}
