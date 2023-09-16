import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model'

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  
  task!: Task;
  

  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.tasksService.readById(id).subscribe(res => {
      this.task = res
    });
  }

  updateTask():void{
    this.tasksService.update(this.task.id, this.task).subscribe(() =>{
      this.tasksService.showMessage('Tarefa atualizada com sucesso!')
      this.router.navigate(['/tasks']);

    },);

  }

  cancel():void{
    this.router.navigate(['/tasks'])
  }
}
