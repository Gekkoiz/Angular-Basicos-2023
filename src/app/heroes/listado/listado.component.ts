import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string [] = ['Spiderman', 'Ironman', 'Wolverine', 'Batman', 'Hulk'];
  heroeBor: string='...';



  borrarHeroe(){
      this.heroeBor= this.heroes.shift () || '...';
    }


  }

