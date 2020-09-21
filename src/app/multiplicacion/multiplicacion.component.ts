import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent implements OnInit {
  factor1: number = 0;
  factor2: number = 0;
  producto: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  multiplicacion(): void {
    this.producto = this.factor1 * this.factor2;
  }

}
