import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

import {
  MatDialogModule,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    FormsModule,
    TodoItemComponent,
    EditTodoDialogComponent,
    // MatDialog,
    // MatDialogModule,
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  // todoTextField: string = '';
  showValidationErrors: boolean = true;

  // inject the data service and mat dialog
  constructor(private dataService: DataService, private dialog: MatDialog) {}

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

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo) {
    // Get the index of the clicked todo
    const index = this.todos.indexOf(todo);

    // Open the dialog
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '700px',
      data: todo,
    });

    // When the dialog closes, get the result and update the todo
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result);
      }
    });
  }
}
