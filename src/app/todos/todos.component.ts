import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  // todoTextField: string = '';
  showValidationErrors: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
    console.log('Todos: ', this.todos);
  }

  onFormSubmit(form: any) {
    if (form.invalid === true) {
      this.showValidationErrors = true;
      console.log('Form input is Empty');
    } else {
      this.showValidationErrors = false;
      console.log('form.invalid:', form.invalid);
      console.log('showValidationErrors:', this.showValidationErrors);
      console.log('Form input has Data', form.value.text);
      this.dataService.addTodo(new Todo(form.value.text));
      form.reset();
    }
  }
}
