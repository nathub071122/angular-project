import { Injectable } from '@angular/core';
import { Product } from './productsRepository';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items : Product[] = [];
  constructor() { }
  addtoCart(product:Product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
}
