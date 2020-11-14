import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductComponent } from './form-product/form-product.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {Routes, RouterModule} from '@angular/router';

const ROUTES: Routes = [
  {path: 'Products', component: HomeComponent},
  {path: 'AddProducts', component: FormProductComponent},
  {path: 'Todos', component: TodoListComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
