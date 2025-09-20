import {Component, inject, type OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {finalize} from 'rxjs';
import type {ProductType} from '../../../../types/product.type';
import {ProductService} from '../../../shared/services/product.service';

@Component({
  selector: 'product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss'
})
export class Product implements OnInit {

  private router = inject(Router);

  loading = signal(true);
  error = false;


  product: ProductType;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0,
    }
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(pm => {
      const id = Number(pm.get('id'));
      if (!id) {
        this.router.navigate(['/']);
        return;
      }

      this.loading.set(true);

      this.productService.getProduct(id)
        .pipe(finalize(() => this.loading.set(false)))
        .subscribe(product => {
        if (product) this.product = product;
        else this.router.navigate(['/']);
      });
    });
  }

  goToCheckout() {
    if (this.product?.title) {
      this.router.navigate(['/checkout'], {
        queryParams: {product: this.product.title}
      });
    }
  }
}
