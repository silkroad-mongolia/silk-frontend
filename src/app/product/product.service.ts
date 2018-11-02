import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { TaobaoProductModel } from './product.model';

const BACKEND_URL = environment.apiUrl + '/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProduct(store: string, product_id: string): Observable<TaobaoProductModel> {
    let url = '';
    if (store === 'taobao') {
      url = 'https://item.taobao.com/item.htm?id=';
    }
    return this.http.post<TaobaoProductModel>(BACKEND_URL + '/fetch', {url: url + product_id});
  }
}
