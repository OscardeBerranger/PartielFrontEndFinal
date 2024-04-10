import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {GlobalVariables} from "../GlobalVariables";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private http = inject(HttpClient)
  private router = inject(Router)
  constructor() { }


  register(object: any){
    this.http.post<any>(GlobalVariables.baseUrl+"/register", object).subscribe({
      next: (response: any)=>{
        this.router.navigate(['/login']);
      }
    })
  }}
