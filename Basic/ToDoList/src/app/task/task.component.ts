import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../models/tasks';
import { Task } from '../../models/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task;

  tasks = TASKS;

  selectedTask: Task;
  onSelect(task: Task) : void {
    this.selectedTask = task;
  }

  constructor() { }

  ngOnInit() {
  }

}
