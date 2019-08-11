import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DalService } from 'src/app/services/dal-service.service';
import { map } from 'rxjs/operators';
import { isNumber } from 'util';
import { Subscription, Observable } from 'rxjs';




@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit, OnChanges {


  displayTask: boolean;
  showChangeTitle = false;
  index: number;
  taskData: Observable<Array<object>>;
  subscription: Subscription;


  @Input() userId: number;
  @Input() userName: string;


  titleForm = new FormGroup({
    titleControl: new FormControl('')
  });


  constructor(private dal: DalService) { }
  ngOnInit() {
   
  }

  ngOnChanges() {
    this.getDataFromService();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getDataFromService() {
    if (isNumber(this.userId)) {
      console.log('getting taskData from service');
      let query = '?userId=' + this.userId;
      let url = 'todos' + query;
      this.subscription = this.dal.getDataFromUrl(url).subscribe(data => {this.taskData = data, console.dir(data)})
      // .pipe(map(data => data.filter(task => task.userId === this.userId)))
    }else{
      this.taskData = null;
      console.log('UserId is null! Cant get data!');
    }
  }

  handleTaskClick(userId: number) {
    if (this.displayTask) {
      this.displayTask = false;
      console.log(`hide tasks for userId: ${userId}`);
    } else {
      this.displayTask = true;
      console.log(`show tasks for userId: ${userId}`);
    }
  }

  
  changeStatus(taskIndex: number) {
    console.log('change status for taskIndex: ', taskIndex);
    
    if(isNumber(taskIndex)){
      this.taskData[taskIndex].completed = !this.taskData[taskIndex].completed;
    }
  }

  changeTitle(taskIndex: number) {
    if (isNumber(taskIndex)) {
      let value = this.titleForm.controls.titleControl.value;
      console.log('value: ', value, 'taskId: ', taskIndex);
      this.taskData[taskIndex].title = value; 
      this.titleForm.reset();
      this.showChangeTitle = false;
      console.log('Successfuly changed title for taskIndex: ', taskIndex, '!')
    } else {
      console.log('Cannot change title for taskIndex: ', taskIndex, 'since it doesnt exist!')
    }
  }






}
