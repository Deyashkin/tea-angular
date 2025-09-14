import {Component, Input} from '@angular/core';
import type {ProductType} from '../../../types/product.type';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCardComponent {

  @Input() product: ProductType;
  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0,
    }
  }
}
