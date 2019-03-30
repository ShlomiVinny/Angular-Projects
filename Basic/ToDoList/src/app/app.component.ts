import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task';
import { TASKS } from 'src/models/tasks';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ToDoList';


  @Input() task: Task;

  static tasksCount: number;
  tasksCount = TASKS.length; //one task already exists
  header: string;
  taskContent: string;


  tasks = TASKS;

  submitTask(header: string, taskContent: string) {
    console.log(this.tasksCount, header, taskContent)
    if (header != '' && header != undefined) {
      this.tasksCount++;
      TASKS.push(new Task(this.tasksCount, this.header, this.taskContent, false));
      this.header = '';
      this.taskContent = '';
    } else alert('Please enter a task name');
    console.log(this.tasksCount);
  }

  

}

