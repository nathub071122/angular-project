import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:Product | undefined;
// Java vs Typescript
// property
// private ActivatedRoute activatedRoute;
// public setActivatedRoute(ActivatedRoute activatedRoute){
  // this.activatedRoute = activatedRoute;
// }
// ProductDetailsComponent() {

// }
// private activatedRoute!: ActivatedRoute;
// constructor(activatedRoute: ActivatedRoute){
// this.activatedRoute = activatedRoute;
// }

// initialize the route
constructor(private activatedRoute: ActivatedRoute) {
console.log("Component is constructed!")
}
// lifecycle hook
ngOnInit(): void {
  // Get the route parameters
const routeParams = this.activatedRoute.snapshot.paramMap;
// get the product id from the map
const productIdFromRoute = Number(routeParams.get('productId'));
this.product = products.find(productFromArray => productFromArray.id === productIdFromRoute); 
// alert(productIdFromRoute);
console.log("Component initialized!")
}



// void test(){
// }
// test():void {
//   // this.activatedRoute
// }
}
