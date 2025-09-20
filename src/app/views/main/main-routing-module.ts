import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Main} from './main/main';
import {Shop} from '../products/shop/shop';

const routes: Routes = [
  { path: '', component: Main, title: 'Главная' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
