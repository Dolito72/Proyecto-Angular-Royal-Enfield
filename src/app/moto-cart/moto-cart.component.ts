import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MotoCartService } from '../moto-cart.service';
import { MotoDataService } from '../moto-data.service';
import { Moto } from '../motos-list/moto';
import { MotosListComponent } from '../motos-list/motos-list.component';

@Component({
  selector: 'app-moto-cart',
  templateUrl: './moto-cart.component.html',
  styleUrls: ['./moto-cart.component.scss']
})
export class MotoCartComponent {
  total : number;
  cartList$: Observable<Moto[]>;
  motos: Moto [];
  constructor(private cart:MotoCartService ) { 
    this.cartList$ = cart.cartList.asObservable();
    
  }

  


}
