import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Moto } from '../motos-list/moto';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange:EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached:EventEmitter<String> = new EventEmitter<String>();


  upQuantity():void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
        this.maxReached.emit("se alcanzó el max");
  }
  
  downQuantity():void{
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  
  changeQuantity(event: { preventDefault: () => void; }): void{
    event.preventDefault();
    this.quantityChange.emit(this.quantity);
  }



}
