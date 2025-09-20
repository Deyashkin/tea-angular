import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing-module';
import {Checkout} from './checkout/checkout';
import {SharedModule} from '../../shared/shared-module';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Checkout,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    OrderRoutingModule,
  ],
  exports: [
    OrderRoutingModule,
  ]
})
export class OrderModule { }
