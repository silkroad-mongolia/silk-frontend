import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productorder',
  templateUrl: './productorder.component.html',
  styleUrls: ['./productorder.component.scss']
})
export class ProductorderComponent implements OnInit {
  profiles = [
    {name: 'profile', link: '/profile'},
    {name: 'yurunhii medeelel', link: '/profile/general'},
    {name: 'Миний захиалгууд', link: '/profile/order'},
  ];
  displayedColumns = ['position',  'name',  'weight', 'symbol'];

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 1.0079, weight: 1.0079, symbol: 4.0026},
    {position: 2, name: 1.0079, weight: 4.0026, symbol: 4.0026},
];
  constructor() { }

  ngOnInit() {
  }

}
