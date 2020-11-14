import { Todo } from './../model/todo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos()
  {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos/');
  }

  getTodosbyUserId(userId: number)
  {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?userId=' + userId.toString());
  }
}
