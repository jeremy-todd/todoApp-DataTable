import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TodoService } from './services/todo.service';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { AddTodoModalComponent } from './add-todo-modal/add-todo-modal.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableTodoComponent } from './data-table-todo/data-table-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableDoingComponent } from './data-table-doing/data-table-doing.component';
import { DataTableDoneComponent } from './data-table-done/data-table-done.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableTodoComponent,
    ConfirmationModalComponent,
    AddTodoModalComponent,
    TodoComponent,
    TodoDetailsComponent,
    DataTableDoingComponent,
    DataTableDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
