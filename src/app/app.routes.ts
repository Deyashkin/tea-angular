import { Routes } from '@angular/router';
import {Main} from './components/pages/main/main';
import {Shop} from './components/pages/shop/shop';
import {Checkout} from './components/pages/checkout/checkout';
import {Product} from './components/pages/product/product';

export const routes: Routes = [
  {path: '', component: Main},
  {path: 'shop', component: Shop},
  {path: 'product/:id', component: Product},
  {path: 'checkout', component: Checkout},
];
