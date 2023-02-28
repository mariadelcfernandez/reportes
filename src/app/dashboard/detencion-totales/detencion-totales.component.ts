import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Totales } from 'src/app/modelos/totales.model';

@Component({
  selector: 'app-detencion-totales',
  templateUrl: './detencion-totales.component.html',
  styleUrls: ['./detencion-totales.component.css']
})
export class DetencionTotalesComponent implements OnInit {
  
  @Input() totales: Totales | null = null;


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('hay cambios', changes)
  }
}


