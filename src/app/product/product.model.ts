export class TaobaoProductModel {
  main_title: string;
  sub_title: string;
  price_regular: string;
  stock: string;
  cumm_comments: string;
  sell_counter: string;
  sell_title: null;
  attributes: (string)[];
  description_images: (string)[];
  sizes: (SizesEntity)[];
  colors: (ColorsEntity)[];
  images: string[];
  recommended: (RecommendedEntity)[];
  looked_watched: (LookedWatchedEntity)[];
  store: (StoreEntity);
  sku: object;
}
export class RecommendedEntity {
  image: string;
  product_id: number; // silk.mn/product?id=580500375472
  price: number;
  title: string;
}
export class LookedWatchedEntity {
  image: string;
  product_id: number; // silk.mn/product?id=580500375472
  price: number;
  title: string;
}


export class StoreEntity {
  name: string;
  cover_image: string;
  star_count: string;
  star_image: string;
  gold_seller_image: string;
  gold_continuous_image: string;
  description: string;
  service: string;
  logistics: string;
  store_link: string;
  ratings_link: string;
  shopkeeper: string;
  qualification: string;
}
export class SizesEntity {
  name: string;
  id: string;
}
export class ColorsEntity {
  name: string;
  id: string;
  image: string;
}

