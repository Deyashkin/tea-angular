import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {Main} from './views/main/main/main';
import {Shop} from './views/products/shop/shop';
import {Product} from './views/products/product/product';
import {Checkout} from './views/order/checkout/checkout';
import {Layout} from './views/layout';



const routes: Routes = [

  {
    path: '',
    component: Layout,
    children: [
      {path: '', loadChildren: () => import('./views/main/main-module').then(m => m.MainModule)},
      {path: 'shop', loadChildren: () => import('./views/products/products-module').then(m => m.ProductsModule)},
      {path: 'checkout', loadChildren: () => import('./views/order/order-module').then(m => m.OrderModule)},
    ]
  },

  // { path: '', component: Main, title: 'Главная' },
  // { path: 'shop', component: Shop, title: 'Каталог' },
  // { path: 'product/:id', component: Product, title: 'Продукт' },
  // { path: 'checkout', component: Checkout, title: 'Оформление заказа' },


  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
