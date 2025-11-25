import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
 selector: 'app-index.component',
 standalone: true,
 imports: [CommonModule, RouterModule],
 templateUrl: './categorias.component.html',
 styleUrl: './categorias.component.css',
})

export class IndexComponent {
  todosLosJuegos = 'plop';


}
