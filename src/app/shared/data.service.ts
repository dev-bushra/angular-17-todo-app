import { Injectable } from '@angular/core';
import { Todo } from './todo.model'

@Injectable({
  providedIn: 'root',
})

export class DataService {
  todos: Todo[] = [
    new Todo('this is a test!', false),
    new Todo('this is a test two!', false),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates dolorem alias dolores deserunt, qui, amet odio facilis tempora unde sequi numquam explicabo nihil iste labore beatae ea rerum expedita.', true)
  ];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }
}