import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor() { }
  //Calcula la edad actual 
  getEdad(nac: Date) {
    const hoy = new Date();
    const fechaNacimiento = new Date(nac);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
}
