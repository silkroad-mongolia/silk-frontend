import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  catMass = 10;
  costs = this.catMass * 1900;
  long = 100;
  width =  100;
  height = 100;
  mcube = 0;
  costs1 = 0;
  // mcube = this.long * this.width * this.height / 1000000;
  // costs1 = this.mcube * 265000;
  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.mcube = this.long * this.width * this.height / 1000000;
    this.costs1 = this.mcube * 265000;

  }
}
