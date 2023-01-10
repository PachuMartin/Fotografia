import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanerComponent } from './baner/baner.component';



@NgModule({
  declarations: [
    BanerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BanerComponent
  ]
})
export class BanerModule { }
