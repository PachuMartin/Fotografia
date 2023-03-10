import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { CuerpomModule } from '../cuerpom/cuerpom.module';
import { SidebarModule } from '../sidebar/sidebar.module';



@NgModule({
  declarations: [
    InicioComponent,
  ],
  imports: [
    CommonModule,
    CuerpomModule,
    SidebarModule

  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
