import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.scss']
})
export class AddTodoModalComponent implements OnInit {

  closeResult: string;
  modalRef: NgbModalRef;
  todoTitle: string;
  todoId: number;
  @Input() todo: ITodo;

  constructor(
    private modalService: NgbModal,
    private todoService: TodoService
    ) {

  }

  yesAddTodo() {
    console.log("Add button in Modal was clicked")
    this.todoId++;
    console.log("this.todoId = " + this.todoId);
    console.log("todoTitle = " + this.todoTitle);
    this.todoService.addTodo({
      id: this.todoId,
      isDoing: false,
      isEditing: false,
      title: this.todoTitle,
      isDone: false,
    });
    this.todoTitle = "";
    this.modalRef.close();
  }

  open(content) {
    this.modalRef = this.modalService.open(content , {
      ariaLabelledBy: "modal-basic-title"
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
    this.todoId = 1;
  }

  
}