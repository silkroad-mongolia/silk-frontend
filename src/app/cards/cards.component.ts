import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  selected = 'option2';
  cardimage = 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg';

  productId = ' 573406377569';
  productSize = ' S 88 *0,6кг Дараахь';
  productColor = 'Цагаан V- хүзүү';
  productWeight = '0.270 кг.';
  procent = '' ;
  allcosts = '56,210 ';
  unit = 1 ;
  constructor() { }

  ngOnInit() {
  }

}
