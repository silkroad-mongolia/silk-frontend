import {
  Component,
  OnInit
} from '@angular/core';
import {
  SlideModel
} from '../models/slide.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  productsSuggestions = [{
      url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
      href: 'https://www.apple.com/'
    },
    {
      url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
      href: ''
    },
    {
      url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
      href: ''
    },
    {
      url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
      href: ''
    },
  ];
  productsExpecteds = [{
    url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
    href: 'https://www.apple.com/'
  },
  {
    url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
    href: ''
  },
  {
    url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
    href: ''
  },
  {
    url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
    href: ''
  },
];
productLastseens = [{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
  href: 'https://www.apple.com/'
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
  href: ''
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
  href: ''
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
  href: ''
},
];
brands = [{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
  href: 'https://www.apple.com/'
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
  href: ''
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
  href: ''
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
  href: ''
},
];
products = [{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
  href: 'https://www.apple.com/'
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
  href: ''
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
  href: ''
},
{
  url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
  href: ''
},
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
  constructor() {}

  ngOnInit() {}

}
