import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'Ironman', 'Goku', 'Heroexd'];
  heroeBorrado: string = '';
  borarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() ?? '';
  }
}
