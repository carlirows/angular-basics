import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent  {


@Input() nuevo: Personaje = {
  nombre: '',
  poder: 0
}
//cuando componente hijo necesita emitir un valor al padre uso Output
//emito un evento y el padre puede reaccionar a el
//@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

//cuando voy a usar un servicio lo primero que debo hacer es inyectarlo
constructor(private dbzService: DbzService){}

agregar(){    
  if(this.nuevo.nombre.trim().length === 0){ return }
  //this.onNuevoPersonaje.emit(this.nuevo)
  this.dbzService.agregarPersonaje(this.nuevo)
  this.nuevo = {
    nombre:'',
    poder:0
  }

}

}
