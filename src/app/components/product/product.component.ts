import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-product', //name tag(selector)product.component.html
  templateUrl: './product.component.html', //path
})
export class ProductComponent {
  @Input() product: IProduct;

  details = false;
}
