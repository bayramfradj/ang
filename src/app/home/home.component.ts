import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showform : boolean;
  listproduct : product[];
  pmax :number; 
  constructor() { }

  ngOnInit(): void {
    
    this.listproduct=[
      {id:1,title:"HEADSETS",like:0,price:10,quantite:10,img:"p1.jpg"},
      {id:2,title:"WATCH",like:0,price:20,quantite:0,img:"p2.jpg"},
      {id:3,title:"VANS",like:0,price:30,quantite:30,img:"p3.jpg"}
    ]

    this.showform = false;
  }

  incrimnter(p : product){
    let i = this.listproduct.indexOf(p);
    this.listproduct[i].like++;
  }

  add(p:product)
  {
    this.listproduct.push(p);
    this.showform=false;
  }

  switchform()
  {
    this.showform = !this.showform;
  }

}
