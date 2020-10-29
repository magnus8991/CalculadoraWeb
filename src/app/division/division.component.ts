import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  dividendo: number = 0;
  divisor: number = 0;
  cociente: number = 0;
  ejemplo: number;

  constructor() { }

  ngOnInit(): void {
  }

  division(): void {
    this.cociente = this.dividendo / this.divisor;
  }

}
