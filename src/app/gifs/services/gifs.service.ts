import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'VCeoqqheTCOqBV7TbUSnHtxPURxfRjJg';
  private _historial: string[] = [];

  //todo: cambiar any por el type corresponde
  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string) {
    //convirtiendo en lowercase
    query = query.trim().toLowerCase();

    //realizando la condición de no repetición
    if (!this._historial.includes(query)) {
      //añadiendo al inicio
      this._historial.unshift(query);
      //cortando el arreglo en el historial
      this._historial = this._historial.splice(0, 10);
    }

    this.http
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=VCeoqqheTCOqBV7TbUSnHtxPURxfRjJg&q=${query}&limit=10`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });

    console.log(this._historial);
  }
}
