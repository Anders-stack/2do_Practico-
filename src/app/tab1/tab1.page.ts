import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  a=13;
  b=3;
  c=100;
  monto = 0;
  iva = 0;
  it = 0;
  utilidad = 0;
  constructor() {}

  calcularOperacion() {

  this.iva = (this.monto * this.a)/this.c;
  this.it = (this.monto * this.b)/this.c;
  this.utilidad = this.monto - (this.iva + this.it);
  
  }

}
