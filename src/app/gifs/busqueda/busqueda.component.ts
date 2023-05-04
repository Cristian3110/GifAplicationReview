import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  constructor() {}

  // buscando el elemento
  // Non-null assertion operator (!)
  // importarlo cunado te marque y sea un tipo generico
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  //? Ejercicio para demostrar con el @ViewChild la manipulación del HTML
  buscar() {
    const value = this.txtBuscar.nativeElement.value;

    console.log(value);
    // para limpiar
    this.txtBuscar.nativeElement.value = '';
  }
}
