import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias.component',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']

})
export class CategoriasComponent implements OnInit {
  juegos: any;
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoriaId = params['nombre'];
      this.cargarJuegosPorCategoria(categoriaId);
    });
  }
  cargarJuegosPorCategoria(categoriaId: string): void {
    const todosLosJuegos = [
      { nombre: 'Catan', categoria: 'Estrategia', descripcion: 'Juego de estrategia para 3-4 jugadores.', imagen: 'img/catan.jpeg' },
      { nombre: 'Dixit', categoria: 'Familiar', descripcion: 'Juego de cartas imaginativo para toda la familia.', imagen: 'img/dixit.jpeg' },
      { nombre: 'Risk', categoria: 'Estrategia', descripcion: 'Juego de conquista mundial para 2-6 jugadores.', imagen: 'img/risk.jpeg' },
    ];
    this.juegos = todosLosJuegos.filter(juego => juego.categoria.toLowerCase() === categoriaId.toLowerCase());
  }
}
