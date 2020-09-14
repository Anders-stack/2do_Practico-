import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  dato = '';
  v: Array<string> = new Array<string>(5);
  entrada: number;
  salida: number;
  mensaje = ' ';

  constructor() {
    this.entrada = -1;
    this.salida = -1;
  }

  vacia(): boolean {
    return (this.entrada === -1 && this.salida === -1);
  }

  llena(): boolean {
    return ((this.salida === 0 && this.entrada === 4) || (this.entrada === 0 && this.salida === 4));
  }

  insertarInicio(dato: string) {
    if (this.vacia()) {
      this.entrada = this.salida = 0;
      this.v[this.entrada] = dato;
      this.dato = ' ';
    } else {
      if (!this.llena()) {
        this.entrada++;
        this.v[this.entrada] = dato;
        this.dato = ' ';
      } else {
        console.log('Cola llena');
        this.mensaje = ' Cola Llena';
      }
    }
  }
  insertarFinal(dato: string) { 
    if(this.vacia()){
      this.entrada = this.salida = 4;
      this.v[this.entrada] = dato;
      this.dato = ' ';  
    }
    else{
      if(!this.llena()) {
        this.entrada--;
        this.v[this.entrada] = dato;
        this.dato = ' ';
      }
      else{
        console.log('Cola Llena');
        this.mensaje = ' Cola Llena ';
      }
    }
  }



   extraerFinal() {
     if(this.vacia()){
       this.mensaje = ' Cola Vacia';
       return;
     }
     console.log(this.v[this.salida]);
     this.mensaje = ' Valor Inicial extraido' + this.v[this.salida];
     this.v[this.salida] = ' ';
     if(this.salida === this.entrada) {
       this.salida =  this.entrada = -1;
     }
     else{
       this.salida--;
     }
    
  }

  extraerInicio() {
    if (this.vacia()){
      this.mensaje = 'Cola vacia';
      return;
    }
    console.log(this.v[this.salida]);
    this.mensaje = 'Valor Final extraido' + this.v[this.salida];
    this.v[this.salida] = ' ';
    if(this.entrada === this.salida) {
      this.entrada = this.salida = -1;
    }
    else{
      this.salida++;
    }
  }
 
 

  ver() {
    console.log(this.v);
  }

}