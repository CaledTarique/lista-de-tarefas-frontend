import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
    baseUrl = "http://localhost:3001/tasks"
 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }  

  create(task: Task): Observable<Task>{
    return this.http.post<Task>(this.baseUrl, task)
  }

  read(): Observable<Task[]>{
    return this.http.get<Task[]>(this.baseUrl)
  }
  

  readById(id: string):Observable<Task>{
    const url=`${this.baseUrl}/${id}`
    return this.http.get<Task>(url)
  }
 

  update(id:number, task: Task): Observable<Task>{
    const url=`${this.baseUrl}/${id}`
    return this.http.put<Task>(url, task)
  }

  

  delete(id: number): Observable<Task>{
    const url=`${this.baseUrl}/${id}`
    return this.http.delete<Task>(url);
  }

  
}
