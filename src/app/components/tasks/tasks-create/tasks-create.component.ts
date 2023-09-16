import { TasksService } from './../tasks.service';
import { Task } from '../task.model';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.css']
})
export class TasksCreateComponent implements OnInit {
  

  // task!: Task;
  task: Task={
    name:"",
    id: null!,
    date: null!,
    description: "",
    complete: false
  }

  constructor(private tasksService: TasksService,
    private router: Router) { }

  ngOnInit(): void {
  
  }



  createTask(): void {
     this.tasksService.create(this.task).subscribe(() => {
      this.tasksService.showMessage('Tarefa Adicionada!')
       this.router.navigate(['/tasks'])
     });
  }


  cancel(): void {
    this.router.navigate(['/tasks'])
  }

}
