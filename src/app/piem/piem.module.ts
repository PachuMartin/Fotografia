import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiecComponent } from './piec/piec.component';



@NgModule({
  declarations: [
    PiecComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PiecComponent
  ]

})
export class PiemModule { }
