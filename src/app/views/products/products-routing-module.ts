import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Shop} from './shop/shop';
import {Product} from './product/product';

const routes: Routes = [
  { path: '', component: Shop, title: 'Каталог' },
  { path: 'product/:id', component: Product, title: 'Продукт' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
