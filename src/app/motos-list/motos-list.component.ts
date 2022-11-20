import { Component } from '@angular/core';

@Component({
  selector: 'app-motos-list',
  templateUrl: './motos-list.component.html',
  styleUrls: ['./motos-list.component.scss']
})
export class MotosListComponent {

  moto = {
    "model": "Classic 350",
    "color": "Halcon Black",
    "stock": 4,
    "price": 900,
    "image": "assets/images/classic.jpg",
  }
}
