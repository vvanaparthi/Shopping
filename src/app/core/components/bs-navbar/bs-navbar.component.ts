import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AppUSer } from '../../../shared/models/app-user';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  
  appUser:AppUSer;
  cart$:Observable<ShoppingCart>

  constructor(public auth:AuthService, private cartService:ShoppingCartService) {
    
   }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appuser => this.appUser = appuser);
    
    this.cart$ = await this.cartService.getCart()
  }

  logout(){
    this.auth.logout();
  }

}
