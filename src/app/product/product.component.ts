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
  colors = [
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'red'  },
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'green'},
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'black'  },
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'red'  },
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'green'},
    {src: 'https://placeimg.com/640/480/animals', colorvalue: 'black'  }];
  pics = [
    {src: 'https://placeimg.com/640/480/animals', datasrc: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals', datasrc: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals', datasrc: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals', datasrc: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals', datasrc: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals', datasrc: 'https://placeimg.com/640/480/animals'}
  ];
  store = 429;
  brand: '';
  colorname: '';
  colorvalue: '';
  unit = 1;
  cost = 52745;
  // realcost = 92785;
  costs = this.cost * this.unit;
  constructor(public snackBar: MatSnackBar) {}


  ngOnInit() { }


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
    // this.src = this.pics[index];
     // this.subCategoryVisible = true;
     // if (this.subCategory === false) {
    //     this.subCategory = true;
    // } else {
    //   this.subCategory = false;
    // }

  }
}
