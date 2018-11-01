import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  subCategories: SubCategoryModel[] = [];
  categories: CategoryModel[] = [
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Woman Dress', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
  ];
  constructor() { }

  ngOnInit() {
  }
  toggleCategory(index: number) {
    this.subCategories = this.categories[index].subCategories;
  }

}
