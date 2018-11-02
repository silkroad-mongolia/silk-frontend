import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories = 0;
  breakpoint = 1;
  activeFilters: ProductsModule[] = [{
      name: 'Bags',
      filters: ['tom tsunh', 'suragch tssunh']
    },
    {
      name: 'Woman Dress',
      filters: ['zunii daashilz', 'hurimiin daashiinj']
    },
    {
      name: 'Bags',
      filters: ['tom tsunh', 'suragch tssunh']
    },
    {
      name: 'Bags',
      filters: ['tom tsunh', 'suragch tssunh']
    },
    {
      name: 'Bags',
      filters: ['tom tsunh', 'suragch tssunh']
    },
    {
      name: 'Bags',
      filters: ['tom tsunh', 'suragch tssunh']
    },
  ];

  sorts: SortModule[] = [{
      value: 'sort1',
      viewValue: 'ih zaragdsan'
    },
    {
      value: 'sort2',
      viewValue: 'delguuriin zereglel'
    },
    {
      value: 'sort3',
      viewValue: 'shineer nemegdsen'
    }
  ];
  porducts: ProductModule[] = [{
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    },
    {
      title: 'sorochki',
      name: 'tsamts',
      price: 100,
      src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'
    }
  ];
  constructor() {}

  ngOnInit() {
    this.onResize();
  }
  onResize() {
    const width = window.innerWidth;
    if (width > 1920) {
      this.breakpoint = 5;
    } else if (width > 1280) {
      this.breakpoint = 4;
    } else if (width > 960) {
      this.breakpoint = 3;
    } else if (width > 600) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 1;
    }
  }
}
