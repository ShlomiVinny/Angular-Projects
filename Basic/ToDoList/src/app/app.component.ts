import { Component, Input } from '@angular/core';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  
  @Input() task;

    
}
