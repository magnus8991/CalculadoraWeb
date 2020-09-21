import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {
  minuendo: number = 0;
  sustraendo: number = 0;
  diferencia: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  resta(): void {
    this.diferencia = this.minuendo - this.sustraendo;
  }

}
