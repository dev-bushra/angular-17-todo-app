import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

// injectable is a decorator that is used to inject dependencies into the class.
@Injectable({
  providedIn: 'root',
})

// DataService class is a service that is used to store data in the app.
export class DataService {
  todos: Todo[] = [
    new Todo('this is a test!', false),
    new Todo('this is a test two!', false),
    new Todo(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates dolorem alias dolores deserunt, qui, amet odio facilis tempora unde sequi numquam explicabo nihil iste labore beatae ea rerum expedita.',
      true
    ),
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
