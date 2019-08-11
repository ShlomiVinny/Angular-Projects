import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DalService } from 'src/app/services/dal-service.service';
import { map } from 'rxjs/operators';
import { isNumber } from 'util';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit, OnChanges {


  displayTask: boolean;
  showChangeTitle = false;
  index: number;
  taskData: Array<any>;
  subscription: Subscription;


  @Input() userId: number;
  @Input() userName: string;


  titleForm = new FormGroup({
    titleControl: new FormControl('')
  });


  constructor(private dal: DalService) { }
  ngOnInit() {
    console.log(this.userId);
    this.getDataFromService();
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
      this.subscription = this.dal.getDataFromUrl(url).pipe(map(data => data.filter(task => task.userId === this.userId))).subscribe(data => this.taskData = data)
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

  changeStatus(taskId: number) {
    if (this.taskData[taskId - 1]) {
      this.taskData[taskId - 1].completed = !this.taskData[taskId - 1].completed;
      console.log('change completed status for taskId: ', taskId);
    } else {
      console.log('Cannot change status for taskId: ', taskId, 'since it doesnt exist!');
    }
  }

  changeTitle(taskId: number) {
    if (this.taskData[taskId - 1]) {
      let value = this.titleForm.controls.titleControl.value;
      console.log('value: ', value, 'taskId: ', taskId);
      this.taskData[taskId - 1].title = value; //taskData is an array and expects an index, since indexes start from '0' and taskId's start from '1', we need to reduce it by '1';
      this.titleForm.reset();
      this.showChangeTitle = false;
      console.log('Successfuly changed title for taskId: ', taskId, '!')
    } else {
      console.log('Cannot change title for taskId: ', taskId, 'since it doesnt exist!')
    }
  }






}
