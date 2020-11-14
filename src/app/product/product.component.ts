import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 @Input() product : product ;
 @Input() pmax : number;
 
 @Output() notifEvent = new EventEmitter<product>();
 constructor() { }

  ngOnInit(): void {
  }

  sendNotif(){
   this.notifEvent.emit(this.product);
  }

}
