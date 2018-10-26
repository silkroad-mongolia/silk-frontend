import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatSnackBar
} from '@angular/material';
import {
  TaobaoProductModel, SizesEntity
} from './product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  bigPic: string;
  colors = [{
      src: 'https://placeimg.com/640/480/animals',
      colorvalue: 'red'
    },
    {
      src: 'https://placeimg.com/640/480/animals',
      colorvalue: 'green'
    },
    {
      src: 'https://placeimg.com/640/480/animals',
      colorvalue: 'black'
    },
    {
      src: 'https://placeimg.com/640/480/animals',
      colorvalue: 'red'
    },
    {
      src: 'https://placeimg.com/640/480/animals',
      colorvalue: 'green'
    },
    {
      src: 'https://placeimg.com/640/480/animals',
      colorvalue: 'black'
    }
  ];
  pics = [{
      src: 'https://placeimg.com/640/480/animals',
      datasrc: 'https://placeimg.com/640/480/animals'
    },
    {
      src: 'https://placeimg.com/640/480/architechture',
      datasrc: 'https://placeimg.com/640/480/architechture'
    },
    {
      src: 'https://placeimg.com/640/480/nature',
      datasrc: 'https://placeimg.com/640/480/nature'
    },
    {
      src: 'https://placeimg.com/640/480/people',
      datasrc: 'https://placeimg.com/640/480/people'
    },
    {
      src: 'https://placeimg.com/640/480/tech',
      datasrc: 'https://placeimg.com/640/480/tech'
    },
    {
      src: 'https://placeimg.com/640/480/animals',
      datasrc: 'https://placeimg.com/640/480/animals'
    }
  ];

  product: TaobaoProductModel;
  constructor(public snackBar: MatSnackBar) {}


  ngOnInit() {
    // this.bigPic = this.pics[0].src;

    this.product = {
      main_title: 'Зуух Америкийн Retro хар хар олон халаасны мотоцикл хүрэм хар хандлага зэрлэг Tooling хүрэм хүрэм эрэгтэй',
      sub_title: '',
      price_regular: '399.00',
      stock: '2',
      cumm_comments: '8990',
      sell_counter: '-',
      sell_title: null,
      attributes: [
        'Барааны тэмдэг: бусад / бусад',
        'Материал: бусад',
        'Хэмжээ: M L XL 2XL',
        'Хээ: хатуу өнгө',
        'Хүзүүвч төрөл:',
        'Хувцасны загвар: цахилгаан товч босго',
        'Өнгө: хар улаан',
        'Ханцуйны төрөл: ханцуйгаа',
        'Зах зээлийн цаг: 2018',
        'Үгүй: Дулааны 4846',
        'Дэд ангилал: урсгал',
        'Үндсэн хэв маяг: залуучууд поп',
        'Холбогдох улирал: Хавар',
        'Ханцуйны урт: Урт ханцуй',
        'Зузаан: Тогтмол',
        'Холбогдох дүр зураг: Бусад чөлөөт цаг',
        'Урт: тогтмол',
        'Хувилбар: сул',
        'Style дэлгэрэнгүй: олон халаас (3 ба түүнээс дээш)',
        'Үйл явц: Угаасан',
        'Тохиромжтой: өсвөр насныхан',
        'Hem дизайн: Хавирганы зах',
        'Хувцасны халаасны хэв маяг: гурван хэмжээст засвар халаасны',
        'Хэв маяг өмсөх: өмссөн',
        'Материал найрлага: Шинэ полиэстр материалтай шилэн 100%'
      ],
      description_images: [
        'https://img.alicdn.com/imgextra/i1/1809641154/TB2gisnXlnTBKNjSZPfXXbf1XXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/TB25EbBXQKWBuNjy1zjXXcOypXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/O1CN011KOZVtlpvRcgeCy_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/O1CN011KOZWc65AXqOvkd_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i3/1809641154/TB2dqk1XiCYBuNkHFCcXXcHtVXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2BYUtXljTBKNjSZFwXXcG4XXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i3/1809641154/TB2qzskXiAnBKNjSZFvXXaTKXXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2q3MDXnqWBKNjSZFxXXcpLpXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/TB2niAlXiMnBKNjSZFzXXc_qVXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/O1CN011KOZWc69OqwSiDL_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/O1CN011KOZWadQmazho7S_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/O1CN011KOZWOEIIQtxU9s_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i4/1809641154/TB23JzGXMaTBuNjSszfXXXgfpXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2jbLIXH1YBuNjSszhXXcUsFXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i4/1809641154/TB2k9.rXljTBKNjSZFuXXb0HFXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2z9LFXQOWBuNjSsppXXXPgpXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/TB28S7kXf6TBKNjSZJiXXbKVFXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i4/1809641154/O1CN011KOZWPGndUWRpev_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2ClwxziCYBuNkHFCcXXcHtVXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/TB2TeU9azrguuRjy0FeXXXcbFXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/TB2QS34HNWYBuNjy1zkXXXGGpXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/TB2gOGEzyOYBuNjSsD4XXbSkFXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2MTWqHMaTBuNjSszfXXXgfpXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2gGZmXkomBKNjSZFqXXXtqVXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/TB2wHQhXmMmBKNjSZTEXXasKpXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i4/1809641154/TB2HWk1XiCYBuNkHFCcXXcHtVXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2OcjCXHSYBuNjSspiXXXNzpXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2KdzIXL5TBuNjSspcXXbnGFXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB2qbPIXH1YBuNjSszhXXcUsFXa_!!1809641154.jpg'
      ],
      sizes: [{
          name: 'M',
          id: '20509:28315'
        },
        {
          name: 'L',
          id: '20509:28316'
        },
        {
          name: 'XL',
          id: '20509:28317'
        },
        {
          name: '2XL',
          id: '20509:6145171'
        }
      ],
      colors: [
        {
          name: 'Хар',
          id: '1627207:28341'
        },
        {
          name: 'Улаан',
          id: '1627207:28326'
        }
      ],
      images: [{
          small: 'https://img.alicdn.com/imgextra/i4/1809641154/TB2Su3Ez_JYBeNjy1zeXXahzVXa_!!1809641154.jpg_400x400.jpg',
          big: 'https://img.alicdn.com/imgextra/i4/1809641154/TB2Su3Ez_JYBeNjy1zeXXahzVXa_!!1809641154.jpg_1200x1200.jpg'
        },
        {
          small: 'https://img.alicdn.com/imgextra/i4/1809641154/TB2Su3Ez_JYBeNjy1zeXXahzVXa_!!1809641154.jpg_50x50.jpg',
          big: 'https://img.alicdn.com/imgextra/i4/1809641154/TB2Su3Ez_JYBeNjy1zeXXahzVXa_!!1809641154.jpg_400x400.jpg'
        },
        {
          small: 'https://img.alicdn.com/bao/uploaded/i2/1809641154/TB2vgvyjbZnBKNjSZFGXXbt3FXa_!!1809641154.jpg_50x50.jpg',
          big: 'https://img.alicdn.com/bao/uploaded/i2/1809641154/TB2vgvyjbZnBKNjSZFGXXbt3FXa_!!1809641154.jpg_400x400.jpg'
        },
        {
          small: 'https://img.alicdn.com/imgextra/i2/1809641154/TB23qRsjcUrBKNjSZPxXXX00pXa_!!1809641154.jpg_50x50.jpg',
          big: 'https://img.alicdn.com/imgextra/i2/1809641154/TB23qRsjcUrBKNjSZPxXXX00pXa_!!1809641154.jpg_400x400.jpg'
        },
        {
          small: 'https://img.alicdn.com/imgextra/i1/1809641154/TB2im48z7yWBuNjy0FpXXassXXa_!!1809641154.jpg_50x50.jpg',
          big: 'https://img.alicdn.com/imgextra/i1/1809641154/TB2im48z7yWBuNjy0FpXXassXXa_!!1809641154.jpg_400x400.jpg'
        },
        {
          small: 'https://img.alicdn.com/imgextra/i3/1809641154/TB2BvRbzWSWBuNjSsrbXXa0mVXa_!!1809641154.jpg_50x50.jpg',
          big: 'https://img.alicdn.com/imgextra/i3/1809641154/TB2BvRbzWSWBuNjSsrbXXa0mVXa_!!1809641154.jpg_400x400.jpg'
        }
      ],
      sku: {
        '20509:28316;1627207:28341': {
          price: '39900.00',
         stock: '2',
          skuId: '3739270998343',
          oversold: false
        },
        '20509:28315;1627207:28341': {
          price: '3990.00',
          stock: '2',
          skuId: '3739270998342',
          oversold: false
        },
        '20509:6145171;1627207:28341': {
          price: '3992.00',
          stock: '2',
          skuId: '3739270998345',
          oversold: false
        },
        '20509:28317;1627207:28341': {
          price: '399.00',
          stock: '2',
          skuId: '3739270998344',
          oversold: false
        },
        '20509:6145171;1627207:28326': {
          price: '3991.00',
          stock: '2',
          skuId: '3863882476943',
          oversold: false
        },
        '20509:28316;1627207:28326': {
          price: '3992.00',
          stock: '2',
          skuId: '3863882476941',
          oversold: false
        },
        '20509:28315;1627207:28326': {
          price: '3993.00',
          stock: '2',
          skuId: '3863882476940',
          oversold: false
        },
        '20509:28317;1627207:28326': {
          price: '3994.00',
          stock: '2',
          skuId: '3863882476942',
          oversold: false
        }
      }
    };
    this.bigPic = this.product.images[0].big;
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
    this.bigPic = this.product.images[index].big;
  }
  changePrice() {

  }
}
