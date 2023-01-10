import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarjeta } from 'src/app/models/clases';

@Component({
  selector: 'app-tarjeta-detalle',
  templateUrl: './tarjeta-detalle.component.html',
  styleUrls: ['./tarjeta-detalle.component.scss']
})
export class TarjetaDetalleComponent implements OnInit {


  @Input() tarinput:Tarjeta;
  @Output() tarEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    console.log("llego tar ",this.tarinput);
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("llego taronchanges  ",this.tarinput);
 
  }

  agregarCategoria():void{
    console.log("agregar elemento");
    let nuevaCategoria={
      id:3,
      nombre:'nueva',
      imagen:'egresados1.jpg',
      descripcion:''

    }
    this.tarEmitter.emit(nuevaCategoria);

  }

}
