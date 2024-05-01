import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { CommonModule } from '@angular/common';


// Component Decorator
@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    CommonModule,
    // MatDialogModule
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})

// Component Class
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo; // declaring a property called todo of type Todo that can receive data from a parent component, and you're telling the TypeScript compiler that you're sure that the todo property will be initialized before it's used.
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('received Props form parent:', this.todo);
  }

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
  }

  onDeleteClicked() {
    this.deleteClicked.emit();
  }
}
