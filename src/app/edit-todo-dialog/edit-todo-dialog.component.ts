import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Todo } from '../shared/todo.model';


// Component Decorator

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
})

// Component Class
export class EditTodoDialogComponent implements OnInit {
  constructor(
    // inject dialogRef from MatDialogRef to use the dialog and inject the data from the todo component into the dialog component.
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return;
    // here we are updating the todo with the new values from the form and then we are closing the dialog with the updated todo.
    const updatedTodo = {
      ...this.todo,
      ...form.value,
    };
    // here we are closing the dialog and return the updated todo.
    this.dialogRef.close(updatedTodo);
  }
}
