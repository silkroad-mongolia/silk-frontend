import { Component, OnInit } from '@angular/core';
import {
  SlideModel
} from '../models/slide.model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  subCategoryVisible = false;
  subCategories: string[] = [];
  categories: CategoryModel[] = [
    {name: 'Bags', subCategories: ['tom tsunh', 'suragch tssunh']},
    {name: 'Woman Dress', subCategories: ['zunii daashilz', 'hurimiin daashiinj']},
    {name: 'Bags', subCategories: ['tom tsunh', 'suragch tssunh']},
    {name: 'Bags', subCategories: ['tom tsunh', 'suragch tssunh']},
    {name: 'Bags', subCategories: ['tom tsunh', 'suragch tssunh']},
  ];

  imageUrls: (string | SlideModel)[] = [{

    url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
    caption: 'The first slide',
    href: '#config'
  },
  {
    url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
    caption: 'Apple TV',
    href: 'https://www.apple.com/'
  },
  'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
];
  height = '400px';
  minHeight: string;
  arrowSize = '30px';
  showArrows = true;
  disableSwiping = false;
  autoPlay = true;
  autoPlayInterval = 3333;
  stopAutoPlayOnSlide = true;
  debug = false;
  backgroundSize = 'cover';
  backgroundPosition = 'center center';
  backgroundRepeat = 'no-repeat';
  showDots = true;
  dotColor = '#FFF';
  showCaptions = true;
  captionColor = '#FFF';
  captionBackground = 'rgba(0, 0, 0, .35)';
  lazyLoad = false;
  hideOnNoSlides = false;
  constructor() { }

  toggleCategory(index: number) {
    // this.subCategoryVisible = true;
    this.subCategories = this.categories[index].subCategories;

    // if (this.subCategory === false) {
    //     this.subCategory = true;
    // } else {
    //   this.subCategory = false;
    // }
  }

  // hideCategory() {
  //   this.subCategoryVisible = false;
  // }

  // showCategory() {
  //   this.subCategoryVisible = true;
  // }

  ngOnInit() {
  }

}
