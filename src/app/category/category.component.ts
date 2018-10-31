import { Component, OnInit } from '@angular/core';
import { SlideModel } from '../models/slide.model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  subCategories: SubCategoryModel[] = [];
  categories: CategoryModel[] = [
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Woman Dress', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
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
    this.subCategories = this.categories[index].subCategories;
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
