import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // также нужно добавить в modulle import
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // for auto regist.
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products');
  }
}
