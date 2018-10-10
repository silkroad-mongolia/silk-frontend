import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

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
    {src: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals'},
    {src: 'https://placeimg.com/640/480/animals'}
  ];
  images: GalleryItem[];
  unit = 17192;
  store = 429;
  brand: '';
  colorname: '';
  colorvalue: '';
  cost = 52745;
  // realcost = 92785;
  costs =  '';
  constructor() {}


  ngOnInit() {

    this.images = [
      new ImageItem({src: 'https://placeimg.com/640/480/animals', thumb: 'https://placeimg.com/640/480/animals'}),
      new ImageItem({src: 'https://placeimg.com/640/480/animals', thumb: 'https://placeimg.com/640/480/animals'}),
      new ImageItem({src: 'https://placeimg.com/640/480/animals', thumb: 'https://placeimg.com/640/480/animals'}),
    ];
  }
}
