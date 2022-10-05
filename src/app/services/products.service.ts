import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; // также нужно добавить в modulle import
import { IProduct } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // for auto regist.
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: { limit: 8 }, //second arg.- params for request
      }),
    });
  }
}
