import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
 selector: 'app-index.component',
 standalone: true,
 imports: [CommonModule, RouterModule],
 templateUrl: './index.component.html',
 styleUrl: './index.component.css',
})

export class IndexComponent {
  tituloPrincipal = 'Board Games Followship';
  subtitulo = 'Explora Nuestras Categorías de Juegos';
  accion_modificar_perfil = './modificar-perfil.component.html';

}
