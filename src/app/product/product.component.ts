import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatSnackBar
} from '@angular/material';
import {
  TaobaoProductModel,
} from './product.model';
import { ProductService } from './product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  bigPic: string;
  selectedImageIndex = 0;
  color_id: string;
  size_id: string;
  product: TaobaoProductModel;
  unit = 1;
  price_regular1: number;
  attributes: object[] = [];
  isLoading = false;

  constructor(private snackBar: MatSnackBar,
    private productService: ProductService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id') && paramMap.has('store')) {
        const id = paramMap.get('id');
        const store = paramMap.get('store');

        this.productService.getProduct(store, id).subscribe(product => {
          this.product = product;

          this.bigPic = this.product.images[0];
          const n = this.product.attributes.length;
          for (let i = 0; i < n; i++) {
            const attr = this.product.attributes[i].split(':');
            if (attr.length >= 2) {
              this.attributes.push({
                'key': attr[0],
                'value': attr[1]
              });
            }
          }
          this.isLoading = false;
        }, (error) => {
          console.log(error);
        });
      } else {
        this.isLoading = false;

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
      colors: [{
          name: 'Хар',
          id: '1627207:28341',
          image: '',
        },
        {
          name: 'Улаан',
          id: '1627207:28326',
          image: '',
        }
      ],
      images: [
        'https://img.alicdn.com/imgextra/i4/1809641154/TB2Su3Ez_JYBeNjy1zeXXahzVXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i4/1809641154/TB2Su3Ez_JYBeNjy1zeXXahzVXa_!!1809641154.jpg',
        'https://img.alicdn.com/bao/uploaded/i2/1809641154/TB2vgvyjbZnBKNjSZFGXXbt3FXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i2/1809641154/TB23qRsjcUrBKNjSZPxXXX00pXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i1/1809641154/TB2im48z7yWBuNjy0FpXXassXXa_!!1809641154.jpg',
        'https://img.alicdn.com/imgextra/i3/1809641154/TB2BvRbzWSWBuNjSsrbXXa0mVXa_!!1809641154.jpg',
      ],
      store: {
        name: '掌柜:卢百万103',
        cover_image: '//gtms01.alicdn.com/tps/i1/TB1zIlNFVXXXXXtXpXXxwHxIVXX-198-60.png',
        star_count: '5',
        star_image: 'rgba(0, 0, 0, 0) -webkit-image-set(url(\"https://gtms03.alicdn.com/tps/i4/TB17JRyFVXXXXXhXpXXxPfUFXXX-16-16.gif\") 1x, url(\'https://gtms03.alicdn.com/tps/i1/TB1oTVxFVXXXXXyXpXXBStGGXXX-32-32.gif\') 2x) no-repeat scroll 0px 0px / auto padding-box border-box',
        gold_seller_image: 'true',
        gold_continuous_image: 'true',
        description: '4.7',
        service: '4.7',
        logistics: '4.7',
        store_link: '//lubaiwan.taobao.com',
        ratings_link: '//rate.taobao.com/user-rate-c9841f6e2aec2340f693529aa24fbce8.htm',
        shopkeeper: '卢百万103',
        qualification: '10888元'
      },
      // recommended -> image _180x180.jpg
      // looked_watched -> image _80x80.jpg
      // colors -> image _30x30.jpg
      // images ->  esvel _1200x1200.jpg
      recommended: [{
        image: '//img.alicdn.com/bao/uploaded/i1/1809641154/O1CN011KOZWplP44IMDzD_!!1809641154.jpg',
        product_id: 580500375472, // silk.mn/product?id=580500375472
        price: 188.00,
        title: 'АНУ-ын чимэг зуух Мартин гутал эрэгтэй өндөр дээд энгийн гутал урсгал эрэгтэйчүүдийн богино гутал Британийн Retro гутал'
      }, ],
      looked_watched: [{
        image: 'http://img.alicdn.com/bao/uploaded/O1CN011KOZW1WQUeua9mv_!!1809641154.jpg',
        product_id: 574788956487,
        price: 188.00,
        title: 'Зуухны АНУ-ын чимэг олон талын тойрч явах хүрэм эрэгтэй сул чиг хандлага зэрлэг хар олон халаасны хар хүрэм эрэгтэй урсгал'
      }, ],
      sku: {
        ';20509:28316;1627207:28341;': {
          price: '39900.00',
          stock: '2',
          skuId: '3739270998343',
          oversold: false
        },
        ';20509:28315;1627207:28341;': {
          price: '3990.00',
          stock: '2',
          skuId: '3739270998342',
          oversold: false
        },
        ';20509:6145171;1627207:28341;': {
          price: '3992.00',
          stock: '2',
          skuId: '3739270998345',
          oversold: false
        },
        ';20509:28317;1627207:28341;': {
          price: '399.00',
          stock: '2',
          skuId: '3739270998344',
          oversold: false
        },
        ';20509:6145171;1627207:28326;': {
          price: '3991.00',
          stock: '2',
          skuId: '3863882476943',
          oversold: false
        },
        ';20509:28316;1627207:28326;': {
          price: '3992.00',
          stock: '2',
          skuId: '3863882476941',
          oversold: false
        },
        ';20509:28315;1627207:28326;': {
          price: '3993.00',
          stock: '2',
          skuId: '3863882476940',
          oversold: false
        },
        ';20509:28317;1627207:28326;': {
          price: '3994.00',
          stock: '2',
          skuId: '3863882476942',
          oversold: false
        }
      }
    };
       this.bigPic = this.product.images[0];
          const n = this.product.attributes.length;
          for (let i = 0; i < n; i++) {
            const attr = this.product.attributes[i].split(':');
            if (attr.length >= 2) {
              this.attributes.push({
                'key': attr[0],
                'value': attr[1]
              });
            }
          }
        console.log('No Store or ID given');
      }
    });

  }
  sizeChange(size_id) {
    this.size_id = size_id;
    const key = ';' + this.size_id + ';' + this.color_id + ';';
    if (this.product.sku[key]) {
      this.product.price_regular = this.product.sku[key].price;
    }
  }

  colorChange(color_id) {
    this.color_id = color_id;
    const key = ';' + this.size_id + ';' + this.color_id + ';';
    if (this.product.sku[key]) {
      this.product.price_regular = this.product.sku[key].price;
    }
  }
  unitChange() {
    this.price_regular1 = parseFloat(this.product.price_regular) * this.unit;
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
    this.bigPic = this.product.images[index];
    this.selectedImageIndex = index;
  }
}
