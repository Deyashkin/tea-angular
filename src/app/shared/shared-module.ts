import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card';
import {RouterLink, RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class SharedModule { }
