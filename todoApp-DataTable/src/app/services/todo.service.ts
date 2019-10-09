import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  /*todoList: ITodo[] = [
    {
      id: 1,
      title: "Install Angular CLI",
      isDoing: false,
      isDone: false,
      isEditing: false,
    }
  ];*/

  todoList: ITodo[] = [
    {id: 1, title: 'Complete adding data-table stuff.', isDone: false, isDoing: false, isEditing: false},
    {id: 2, title: 'Take Deb out to dinner. ', isDone: false, isDoing: false, isEditing: false},
    {id: 3, title: 'Task 3', isDone: false, isDoing: false, isEditing: false},
    {id: 4, title: 'Task 4', isDone: false, isDoing: false, isEditing: false},
    {id: 5, title: 'Task 5', isDone: false, isDoing: false, isEditing: false},
  ];

  constructor() { }

  getTodoItems() {
    return this.todoList;
  }

  getTodoItem(id: number): ITodo {
    return this.todoList.find(x => x.id === id);
  }

  //add a todo item
  addTodo(todo: ITodo): void {
    this.todoList.push(todo);
  }

  //delete a todo item
  deleteTodo(todo: ITodo):void {
    console.log("delete methods was called in todo.services " + todo)
    const index = this.todoList.indexOf(todo, 0);
    this.todoList.splice(index, 1);
  }

  //complete a todo item
  completeTodo(todo: ITodo) {
    todo.isDone = true;
    todo.isDoing = false;
  }

  //reopen a todo item
  reopenTodo(todo: ITodo) {
    todo.isDone = false;
  }

  //change the status of a todo item to doing
  doingTodo(todo: ITodo) {
    todo.isDoing = true;
    todo.isDone = false;
    console.log("You are now working on " + todo.title)
  }
}