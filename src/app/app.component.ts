import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mytitle = 'myAngular first App';

  products: IProduct[] = [];

  loading = false; //indicator downloding

  products$: Observable<IProduct[]>; // observable <Generic Types>

  term = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    //for get date http(s) request (products.service.ts)
    this.loading = true;
    this.products$ = this.productsService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // });
  }
}
