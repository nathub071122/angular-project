import { Injectable } from '@angular/core';
import { Product } from './productsRepository';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = [];
  constructor() { }
  addtoCartInService(product:Product){
    this.items.push(product);
  }
  getItemsInService(){
    return this.items;
  }
  clearCartInService(){
    this.items = [];
    return this.items;
  }
}
