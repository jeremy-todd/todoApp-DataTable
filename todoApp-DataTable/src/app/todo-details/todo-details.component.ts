import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {
  title = 'Todo List';
  todoTitle: string;
  todoList: ITodo[] = [];
  todoId: number;
  status: string = "";
  todo: ITodo;

  constructor(private todoService: TodoService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.todoList = this.todoService.todoList;
    this.activatedroute.paramMap.subscribe(params => {
      const todoId = +params.get("id");
      this.todo = this.todoService.getTodoItem(todoId);
    });
  }
}
