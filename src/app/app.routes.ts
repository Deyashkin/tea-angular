import { Routes } from '@angular/router';
import {Main} from './views/main/main/main';
import {Shop} from './views/products/shop/shop';
import {Product} from './views/products/product/product';
import {Checkout} from './views/order/checkout/checkout';


export const routes: Routes = [
  {path: '', component: Main},
  {path: 'shop', component: Shop},
  {path: 'product/:id', component: Product},
  {path: 'checkout', component: Checkout},
];
