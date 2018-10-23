import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories = 0;
  activeFilters: ProductsModule[] = [
    {name: 'Bags', filters: ['tom tsunh', 'suragch tssunh']},
    {name: 'Woman Dress', filters: ['zunii daashilz', 'hurimiin daashiinj']},
    {name: 'Bags', filters: ['tom tsunh', 'suragch tssunh']},
    {name: 'Bags', filters: ['tom tsunh', 'suragch tssunh']},
    {name: 'Bags', filters: ['tom tsunh', 'suragch tssunh']},
    {name: 'Bags', filters: ['tom tsunh', 'suragch tssunh']},
  ];

  sorts: SortModule[] = [
    {value: 'sort1', viewValue: 'ih zaragdsan'},
    {value: 'sort2', viewValue: 'delguuriin zereglel'},
    {value: 'sort3', viewValue: 'shineer nemegdsen'}
  ];
  porducts: ProductModule[] = [
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'  },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg' },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'  },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'  },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg' },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'  },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'  },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg' },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'  },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'  },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg' },
    {title: 'sorochki', name: 'tsamts', price: 100, src: 'http://icons.iconarchive.com/icons/goescat/macaron/icons-390.jpg'  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
