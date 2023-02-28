import { Pipe, PipeTransform } from '@angular/core';
import { FuncionesService } from '../servicios/funciones.service';

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  constructor(private funcionesService:FuncionesService){}

  transform(fechaNac: Date ): Number {

      return this.funcionesService.getEdad(fechaNac);
  }

}
