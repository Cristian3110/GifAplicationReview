import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'VCeoqqheTCOqBV7TbUSnHtxPURxfRjJg';
  private _historial: string[] = [];

  //todo: cambiar any por el type corresponde
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // manteniendo el historial en el localstorage
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];

    //manteniendo los resultados
    if (localStorage.getItem('resultado')) {
      this.resultados = JSON.parse(localStorage.getItem('resultado')!);
    }
  }

  buscarGifs(query: string) {
    //convirtiendo en lowercase
    query = query.trim().toLowerCase();

    //realizando la condición de no repetición
    if (!this._historial.includes(query)) {
      //añadiendo al inicio
      this._historial.unshift(query);
      //cortando el arreglo en el historial
      this._historial = this._historial.splice(0, 10);

      //add information to localStorage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http
      .get<SearchGifsResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=VCeoqqheTCOqBV7TbUSnHtxPURxfRjJg&q=${query}&limit=10`
      )
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        //manteniendo los result
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      });

    console.log(this._historial);
  }
}
