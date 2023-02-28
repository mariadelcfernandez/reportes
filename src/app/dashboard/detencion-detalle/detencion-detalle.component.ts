import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Detencion } from '../../modelos/detencion.model';
import { FuncionesService } from '../../servicios/funciones.service';

@Component({
  selector: 'app-detencion-detalle',
  templateUrl: './detencion-detalle.component.html',
  styleUrls: ['./detencion-detalle.component.css']
})
export class DetencionDetalleComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Detencion,
    private funcionService: FuncionesService, 
    ) { }

  ngOnInit(): void {
  }

  getEdad(nac: Date){return this.funcionService.getEdad(nac)}


}
