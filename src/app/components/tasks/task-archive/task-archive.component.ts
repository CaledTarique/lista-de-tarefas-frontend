import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model'


@Component({
  selector: 'app-task-archive',
  templateUrl: './task-archive.component.html',
  styleUrls: ['./task-archive.component.css']
})
export class TaskArchiveComponent implements OnInit {

  tasks: Task[]=[];
 data = Intl.DateTimeFormat('pt-BR',{
  dateStyle: "long",
});


  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.read().subscribe(tasks => {
      this.tasks = tasks
      
    })
  }
}
