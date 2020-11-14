import { EventEmitter,Component, OnInit, Output } from '@angular/core';

import { product } from '../model/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  product : product;
  @Output() addpro = new EventEmitter<product>();
  constructor() { 
    
  }

  ngOnInit(): void {
    this.product = new product();
  }

  save()
  { 
      this.product.img="p2.jpg";
      this.product.like=0;
      this.addpro.emit(this.product);
  }

}
