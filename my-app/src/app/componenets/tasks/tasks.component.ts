import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS; //Task type array filled with the contents of TASKS called tasks

  constructor() { }

  ngOnInit(): void {
  }

}
