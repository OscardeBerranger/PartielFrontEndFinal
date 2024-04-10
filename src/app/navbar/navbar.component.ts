import {Component, inject, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  protected token = localStorage.getItem('token');
  protected router = inject(Router)

  constructor()
  {

  }

  protected readonly localStorage = localStorage;
}
