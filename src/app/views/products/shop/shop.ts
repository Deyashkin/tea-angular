import {Component, type OnInit, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type {ProductType} from '../../../../types/product.type';

@Component({
  selector: 'shop-component',
  standalone: false,
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})

export class Shop implements OnInit {

  protected readonly title = signal('tea-angular');
  protected readonly loading = signal(true);

  constructor(private http: HttpClient) {}

  public products: ProductType[] = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.loading.set(true);
    this.http.get<ProductType[]>('https://testologia.ru/tea')
      .subscribe({
        next: (data) => {
          this.products = data;
          this.loading.set(false);
        },
        error: (error) => {
          console.error('Ошибка при загрузке товаров:', error);
          this.loading.set(false);
        }
      });
  }
}
