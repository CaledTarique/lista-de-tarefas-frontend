import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model'
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  task!: Task;
  constructor(private tasksService: TasksService, private router: Router, private route: ActivatedRoute ) { }


  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.tasksService.readById(id).subscribe(res => {
      this.task = res
    });
  
  }

  deleteTask(id: number){
    if(confirm("Deseja excluir está tarefa?")){
      this.tasksService.delete(this.task.id).subscribe(() =>{
        this.tasksService.showMessage('Tarefa excluida com sucesso!')
        this.router.navigate(['/tasks']);
  
      });
    }
    else{
      this.router.navigate(['/tasks'])
    }
    
}

  cancel():void{
    this.router.navigate(['/tasks'])
  }

}
