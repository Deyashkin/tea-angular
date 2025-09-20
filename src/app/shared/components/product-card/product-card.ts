import {Component, Input} from '@angular/core';
import type {ProductType} from '../../../../types/product.type';

@Component({
  selector: 'product-card',
  standalone: false,
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
