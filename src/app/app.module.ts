import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BanerModule } from './baner/baner.module';
import { CuerpomModule } from './cuerpom/cuerpom.module';
import { EncabezadoModule } from './encabezado/encabezado.module';
import { PiemModule } from './piem/piem.module';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    EncabezadoModule,
    CuerpomModule,
    PiemModule,
    BanerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
