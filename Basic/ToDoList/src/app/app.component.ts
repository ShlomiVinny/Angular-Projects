import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task';
import { TASKS } from 'src/models/tasks';
import { MessagesService } from './messages.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private messagesService: MessagesService){}
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
      this.messagesService.add('New task added!')
      this.header = '';
      this.taskContent = '';
    } else this.messagesService.add('Please enter a task name');
    console.log(this.tasksCount);
  }

  

}

