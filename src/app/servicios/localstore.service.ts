import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  constructor() { }

  public setLocalStorage(clave: string, info: any){
    localStorage.setItem(clave, JSON.stringify(info));
  }

  public getLocalStorage(clave: string){
    return localStorage.getItem(clave);
  }

}
