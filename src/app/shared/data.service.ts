import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

// injectable is a decorator that is used to inject dependencies into the class.
@Injectable({
  providedIn: 'root',
})

// DataService class is a service that is used to store data in the app.
export class DataService {
  todos: Todo[] = [
    new Todo('Check the documentation for the advanced emitters used in AngularJS', true),
    new Todo('Eat your Lunch!', false),
  ];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
