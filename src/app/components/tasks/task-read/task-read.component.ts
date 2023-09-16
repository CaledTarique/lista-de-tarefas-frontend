import { TasksCreateComponent } from '../tasks-create/tasks-create.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model'
import { Component, OnInit, NgModule } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-task-read',
  templateUrl: './task-read.component.html',
  styleUrls: ['./task-read.component.css']
})
export class TaskReadComponent implements OnInit {

 tasks: Task[]=[];
 task!: Task;
 data = Intl.DateTimeFormat('pt-BR',{
  dateStyle: "long",
});

 complete!: Task;

  constructor(private tasksService: TasksService,  private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.tasksService.read().subscribe(tasks => {
      this.tasks = tasks
      
    })
  }
  taskCompleta(task:Task){
    task.complete = true;
    this.tasksService.update(task.id,task).subscribe(() =>{
      this.tasksService.showMessage('Tarefa finalizada!')
      this.router.navigate(['/tasks/archive'])
    });
  }

}
