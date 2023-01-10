import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/models/clases';
import { tarjetas } from 'src/app/models/datos';

@Component({
  selector: 'app-cuerpoc',
  templateUrl: './cuerpoc.component.html',
  styleUrls: ['./cuerpoc.component.scss']
})
export class CuerpocComponent implements OnInit {

  listaTarjetas:Tarjeta[]=tarjetas;
  listaMuestraTarjetas:Tarjeta[]=[];
  tarjetaElegida:Tarjeta;  
 
  constructor() { 
    
  }

  ngOnInit(): void {
   // this.lista=this.lista.filter(t=> t.id>=2);
    //console.log(this.lista)
    this.listaMuestraTarjetas=this.listaTarjetas;
  }

  elegir(element:Tarjeta): void{
    console.log("esto se eligio ",element);
    this.tarjetaElegida=element;
  }

  getAgregarCategoria( categoria:Tarjeta){
    console.log("llego al padre ", categoria);
    this.listaMuestraTarjetas.push(categoria);
  }

 


}

