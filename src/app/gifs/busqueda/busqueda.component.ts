import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  constructor(private gifsService: GifsService) {}

  // buscando el elemento
  // Non-null assertion operator (!)
  // importarlo cunado te marque y sea un tipo generico
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  //? Ejercicio para demostrar con el @ViewChild la manipulación del HTML
  buscar() {
    const value = this.txtBuscar.nativeElement.value;

    // valor vacio o espacios vacios opoerdor "trim"
    if (value.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs(value);
    // console.log(value);
    // para limpiar
    this.txtBuscar.nativeElement.value = '';
  }
}
