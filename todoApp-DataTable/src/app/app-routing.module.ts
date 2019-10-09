import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';


const routes: Routes = [
  { path: ':status', component: TodoComponent },
  { path: ':todo', component: TodoComponent,
    children: [
      { path: 'todo-details/:id', component: TodoDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }