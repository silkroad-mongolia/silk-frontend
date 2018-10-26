export class TaobaoProductModel {
  main_title: string;
  sub_title: string;
  price_regular: string;
  stock: string;
  cumm_comments: string;
  sell_counter: string;
  sell_title: null;
  attributes: (string)[] | null;
  description_images: (string)[] | null;
  sizes: (SizesEntity)[] | null;
  colors: (ColorsEntity)[] | null;
  images: (ImagesEntity)[] | null;
  sku: object;
}
export class SizesEntity {
  name: string;
  id: string;
}
export class ColorsEntity {
  name: string;
  id: string;
}
export class ImagesEntity {
  small: string;
  big: string;
}


