import { Component, ViewChild, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material';

const ELEMENT_DATA: ITodo[] = [
  {id: 1, title: 'Complete adding data-table stuff.', isDone: false, isDoing: false, isEditing: false},
  {id: 2, title: 'Take Deb out to dinner. ', isDone: false, isDoing: false, isEditing: false},
  {id: 3, title: 'Task 3', isDone: false, isDoing: false, isEditing: false},
  {id: 4, title: 'Task 4', isDone: false, isDoing: false, isEditing: false},
  {id: 5, title: 'Task 5', isDone: false, isDoing: false, isEditing: false},
];

@Component({
  selector: 'app-data-table-todo',
  templateUrl: 'data-table-todo.component.html',
  styleUrls: ['data-table-todo.component.scss']
})

export class DataTableTodoComponent implements OnInit {

  title = 'Todo List';
  todoTitle: string;
  todoList: ITodo[] = [];
  todoId: number;
  status: string = "";

  constructor(private todoService: TodoService, private activatedroute: ActivatedRoute) {}

  displayedColumns: string[] = ['title', 'isDoing', 'isDone'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource(this.TodoItems);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.todoList = this.todoService.todoList;
    this.activatedroute.paramMap.subscribe(params => {
      this.status = params.get("status");
    });
    this.dataSource.sort = this.sort;
  }

  get filteredArray(): ITodo[] {
    if(!this.status) {
      return this.todoService.todoList;
    }
    else {
      return this.todoService.todoList.filter(x =>
        this.status === "done" ? x.isDone : !x.isDone
        );
    }
  }

  addTodo(todo: ITodo): void {
    this.todoService.addTodo(todo);
  }

  deleteTodo(todo: ITodo): void {
    this.todoService.deleteTodo(todo);
  }

  completeTodo(todo: ITodo): void {
    this.todoService.completeTodo(todo);
  }

  reopenTodo(todo: ITodo): void {
    this.todoService.reopenTodo(todo);
  }

  doingTodo(todo: ITodo): void {
    this.todoService.doingTodo(todo);
  }

  get TodoItems() {
    return this.todoService.todoList.filter(x => x.isDoing === false && x.isDone === false);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
