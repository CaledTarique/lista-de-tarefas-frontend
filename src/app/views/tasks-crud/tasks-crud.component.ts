import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router'
@Component({
  selector: 'app-tasks-crud',
  templateUrl: './tasks-crud.component.html',
  styleUrls: ['./tasks-crud.component.css']
})
export class TasksCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTaskCreate(): void {
    this.router.navigate(['/tasks/create'])

  }
}
