import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuerpocComponent } from './cuerpoc/cuerpoc.component';
import { TarjetaDetalleComponent } from './tarjeta-detalle/tarjeta-detalle.component';



@NgModule({
  declarations: [
    CuerpocComponent,
    TarjetaDetalleComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    CuerpocComponent,TarjetaDetalleComponent
  ]
})
export class CuerpomModule { }
