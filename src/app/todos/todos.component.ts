import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
    console.log('Todos: ', this.todos);
  }
}
