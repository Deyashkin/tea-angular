import { Injectable } from '@angular/core';
import type {ProductType} from '../types/product.type';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })



export class ProductService {

  constructor(private http: HttpClient) {}

  // private products: ProductType[] = [
  //   {
  //     id: 1,
  //     image: 'card-image-1.png',
  //     title: 'Детокс чай лайм ',
  //     description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления',
  //   },
  //   {
  //     id: 2,
  //     image: 'card-image-2.png',
  //     title: 'Ягодный чай ',
  //     description: 'Нотки ягод позволят вам расслабиться и насладиться великолепием этого чая'
  //   },
  //   {
  //     id: 3,
  //     image: 'card-image-3.png',
  //     title: 'Цветочный чай ',
  //     description: 'Душистые цветы создают невероятный аромат и наполняют вас энергией'
  //   },
  //   {
  //     id: 4,
  //     image: 'card-image-4.png',
  //     title: 'Очищающий чай ',
  //     description: 'Бесподобный чай для получения утреннего заряда бодрости'
  //   },
  //   {
  //     id: 5,
  //     image: 'card-image-5.png',
  //     title: 'Кислый чай ',
  //     description: 'Кислый чай для настоящих ценителей кислинки во время чаепития'
  //   },
  //   {
  //     id: 6,
  //     image: 'card-image-6.png',
  //     title: 'Лимонная мята',
  //     description: 'Смесь лимона с мятой сделает ваш день самым лучшим'
  //   },
  // ];


  // getProducts(): ProductType[] {
  //   // ajax
  //   return this.products;
  // }

  // getProduct(id: number): ProductType| undefined {
  //   // ajax
  //   return this.products.find(item => (item.id === id));
  // }

  getProduct(id: number) {
    return this.http.get<any>(`https://testologia.ru/tea?id=${id}`);
  }

}
