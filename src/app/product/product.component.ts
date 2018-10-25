import {
  Component,
  OnInit
} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  bigPic: string;
  colors = [
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'red'  },
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'green'},
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'black'  },
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'red'  },
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'green'},
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'black'  }];
  pics = [
    {src: 'https://placeimg.com/640/480/animals', datasrc: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/architechture', datasrc: 'https://placeimg.com/640/480/architechture'},
    {src: 'https://placeimg.com/640/480/nature', datasrc: 'https://placeimg.com/640/480/nature'},
    {src: 'https://placeimg.com/640/480/people', datasrc: 'https://placeimg.com/640/480/people'},
    {src: 'https://placeimg.com/640/480/tech', datasrc: 'https://placeimg.com/640/480/tech'},
    {src: 'https://placeimg.com/640/480/animals', datasrc: 'https://placeimg.com/640/480/animals'}
  ];
  sizes = [ 'M;', 'L;', 'XL;', '2XL;', '3XL;', '4XL;'];
  store = 429;
  brand: '';
  colorname: '';
  colorvalue: '';
  unit = 1;
  cost = 52745;
  // realcost = 92785;
  costs = this.cost * this.unit;
  constructor(public snackBar: MatSnackBar) {}


  ngOnInit() {
    this.bigPic = this.pics[0].src;
   }


  cardSnackBar() {
    this.snackBar.open('Сагсанд орсон', 'Done', {
      duration: 3000
    });
  }
  likeSnackBar() {
    this.snackBar.open('Таалагдсан бараанд орсон', 'Done', {
      duration: 3000
    });
  }
  togglePic(index: number) {
    this.bigPic = this.pics[index].src;
     // this.subCategoryVisible = true;
     // if (this.subCategory === false) {
    //     this.subCategory = true;
    // } else {
    //   this.subCategory = false;
    // }

  }
}
