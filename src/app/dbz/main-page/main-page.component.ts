import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 3400,
  };

  agregarNuevoPersonaje( personaje: Personaje ): void {
    this.personajes.push(personaje);
  }

  constructor( private dbzService: DbzService) {
    this.personajes = this.dbzService.personajes;
  }
}
