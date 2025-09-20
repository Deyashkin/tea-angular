import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing-module';
import {RouterLink, RouterModule} from '@angular/router';
import {Shop} from './shop/shop';
import {Product} from './product/product';

import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [
    Shop,
    Product,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    RouterLink
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
