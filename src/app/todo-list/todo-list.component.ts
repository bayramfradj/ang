import { TodoService } from './../services/todo.service';
import { Todo } from './../model/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  Todolist: Todo[];
  completed: boolean;
  userId: number;
  constructor( private tservice: TodoService) { }

  ngOnInit() {
   this.completed = false;
   this.tservice.getTodos().subscribe((data: Todo[]) => {this.Todolist = data; this.completed = true; });

  }

  update()
  {
    this.Todolist = null;
    this.completed = false;
    this.tservice.getTodosbyUserId(this.userId).subscribe((data: Todo[]) => {this.Todolist = data; this.completed = true; });
  }

}
