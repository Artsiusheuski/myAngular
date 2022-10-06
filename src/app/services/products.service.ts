import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http'; // также нужно добавить в modulle import
import { IProduct } from '../models/product';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root', // for auto regist.
})
export class ProductsService {
  constructor(private http: HttpClient, private errorService: ErrorService) {} // for reqest

  getAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products1', {
        // params: new HttpParams().append('limit', 3),
        params: new HttpParams({
          fromObject: { limit: 5 },
        }),
      })
      .pipe(
        // from rxjs, to slow down loading(для замедления загрузки)
        delay(2000),
        catchError(this.errorMSG.bind(this))
      );
  }

  private errorMSG(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
