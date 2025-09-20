import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CoreModule} from './core/core-module';


import { App } from './app';
import { AppRoutingModule } from './app-routing-module';



import {ProductsModule} from './views/products/products-module';
import {MainModule} from './views/main/main-module';
import {OrderModule} from './views/order/order-module';
import {SharedModule} from './shared/shared-module';
import {Header} from './shared/layout/header/header';
import {Footer} from './shared/layout/footer/footer';
import {Layout} from './views/layout';



@NgModule({
  declarations: [
    Footer,
    Header,
    App,
    Layout,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule { }
