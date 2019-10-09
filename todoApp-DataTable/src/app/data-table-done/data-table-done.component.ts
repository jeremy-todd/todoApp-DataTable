import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-table-done',
  templateUrl: 'data-table-done.component.html',
  styleUrls: ['data-table-done.component.scss']
})
export class DataTableDoneComponent implements OnInit {

  title = 'Todo List';
  todoTitle: string;
  todoList: ITodo[] = [];
  todoId: number;
  status: string = "";

  constructor(private todoService: TodoService, private activatedroute: ActivatedRoute) {}

  displayedColumns: string[] = ['title', 'isDoing'];

  ngOnInit() {
    this.todoList = this.todoService.todoList;
    this.activatedroute.paramMap.subscribe(params => {
      this.status = params.get("status");
    });
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

  get TodoItems() {
    return this.todoService.todoList.filter(x => x.isDoing === false && x.isDone === true);
  }
}