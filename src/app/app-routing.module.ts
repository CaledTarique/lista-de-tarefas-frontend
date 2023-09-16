import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksCreateComponent } from './components/tasks/tasks-create/tasks-create.component';
import {TaskUpdateComponent} from './components/tasks/task-update/task-update.component';
import {TaskDeleteComponent} from './components/tasks/task-delete/task-delete.component';
import {TaskArchiveComponent} from './components/tasks/task-archive/task-archive.component'

import { HomeComponent } from './views/home/home.component'
import { TasksCrudComponent } from './views/tasks-crud/tasks-crud.component'
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, 
  {
    path: "tasks",
    component: TasksCrudComponent
  },
  {
    path: "tasks/archive",
    component: TaskArchiveComponent
  },
  {
    path: "tasks/create",
    component: TasksCreateComponent
  },
  {
    path: "tasks/update/:id",
    component: TaskUpdateComponent
  },
  {
    path: "tasks/delete/:id",
    component: TaskDeleteComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
