import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MotoCartService } from '../moto-cart.service';
import { Moto } from '../motos-list/moto';

@Component({
  selector: 'app-moto-cart',
  templateUrl: './moto-cart.component.html',
  styleUrls: ['./moto-cart.component.scss']
})
export class MotoCartComponent {

  cartList$: Observable<Moto[]>;
  constructor(private cart:MotoCartService ) { 
    this.cartList$ = cart.cartList.asObservable();
  }




}
