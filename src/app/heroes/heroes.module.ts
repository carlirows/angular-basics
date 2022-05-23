import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core"
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //las declaraciones dice que tiene el modulo, que componentes tengo aqui?
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas quiero hacer publicas o visibles fuera de este modulo
    exports: [
        ListadoComponent
    ],
    //aqui dentro van modulos
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}