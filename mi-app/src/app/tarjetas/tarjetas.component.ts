import { Component } from '@angular/core';
import { tarjeta } from '../interface/tarjetas.interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl:'./tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
  tarjetas: tarjeta[] = [
 
  ];

  constructor() { }
}