import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    //añadiendo al inicio
    this._historial.unshift(query);
    //cortando el arreglo en el historial
    this._historial = this._historial.splice(0, 10);

    console.log(this._historial);
  }

  constructor() {}
}
