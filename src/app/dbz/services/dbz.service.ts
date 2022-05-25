import { Injectable } from '@angular/core'
import { Personaje } from '../interfaces/dbz.interface';

//el servicio solo se ejecuta una vez alguien lo requiera
@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [{
        nombre: 'goku',
        poder: 15000
      },
      {
        nombre: 'Vegueta',
        poder: 7500
      }
    ];

    get personajes():Personaje[]{
        return [...this._personajes]
    }

    //constructor(){}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje)
    }
}