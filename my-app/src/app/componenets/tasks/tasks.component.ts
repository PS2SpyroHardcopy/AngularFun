import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // -- OLD WAY -- static
  //tasks: Task[] = TASKS; //Task type array filled with the contents of TASKS called tasks

  // -- NEW WAY --
  tasks: Task[] = [] // Instead of starting with whatever was in TASKS you start with an empty array

  constructor(private taskService: TaskService) { }// to use a service you have to add it to the constructor!!!

  ngOnInit(): void { // this fires off right away
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks)); // think of this as a promise
  }

}
