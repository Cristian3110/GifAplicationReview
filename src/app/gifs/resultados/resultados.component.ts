import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent {
  // obteniendo resultados
  get resultados() {
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) {}
}
