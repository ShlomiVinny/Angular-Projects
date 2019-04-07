import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../models/tasks';
import { Task } from '../../models/task';
import { AppComponent } from '../app.component';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-Tasks',
  templateUrl: './Tasks.component.html',
  styleUrls: ['./Tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor(private messagesService: MessagesService) { }

  task: Task;
  i:number;

  tasks = TASKS;
  
  
  selectedTask: Task;
  onSelect(task: Task) : void {
    this.selectedTask = task;
    this.messagesService.add('Task Selected!');
  }
  
  setAsCompleted(i:number){
    TASKS[i].isDone = true
    console.log('Task', i ,'is set to completed')
  }

  setAsUncompleted(i:number){
    TASKS[i].isDone = false
    console.log('Task', i ,'is set to uncompleted')
  }

  deleteTask(i:number){
    TASKS.splice(i,1)
    console.log('delete id:', i);
    console.log(TASKS);
  
  }

 

  

  ngOnInit() {
  }

}
