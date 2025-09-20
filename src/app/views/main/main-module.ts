import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing-module';
import {Main} from './main/main';
import {SharedModule} from '../../shared/shared-module';


@NgModule({
  declarations: [
    Main,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  exports: [
    MainRoutingModule,
  ]
})
export class MainModule { }
