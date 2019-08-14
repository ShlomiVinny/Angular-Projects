import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DalService } from 'src/app/services/dal-service.service';
import { isNumber } from 'util';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit, OnChanges {


  displayTask: boolean;
  showChangeTitleArray: Array<number> = [];
  index: number;
  taskData: Array<object>;
  currentTaskData: object;
  subscription: Subscription;


  @Input() userId: number;
  @Input() userName: string;


  titleForm = new FormGroup({
    titleControl: new FormControl('')
  });


  constructor(private dal: DalService) { }
  ngOnInit() {
    this.getDataFromService();
  }

  ngOnChanges() {
    this.filterDataByUserId()
  }

  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getDataFromService(): void {

    let url = 'todos';
    this.subscription = this.dal.getDataFromUrl(url).subscribe(data => this.taskData = data);
    // .pipe(map(data => data.filter(task => task.userId === this.userId))) 
  }


  filterDataByUserId(): void {
    console.log('Filtering task data');

    if (isNumber(this.userId)) {
      this.currentTaskData = this.taskData.filter(value => this.userId === value['userId']);
    } else {
      this.currentTaskData = null;
    }
  }


  changeStatus(taskId: number): void {
    console.log('change status for taskId: ', taskId);

    if (isNumber(taskId)) {
      this.taskData.forEach(task => {
        if (task['id'] === taskId) {
          task['completed'] = !task['completed'];
        }
      })

    }
  }


  changeTitle(taskId: number): void {
    if (isNumber(taskId)) {
      let value = this.titleForm.controls.titleControl.value;
      this.taskData.forEach(task => {
        if (task['id'] === taskId) {
          task['title'] = value;
        }
      })
      this.titleForm.reset();
      this.removeIdFromChangeTitleArray(taskId);
      console.log('Successfuly changed title for taskId: ', taskId, '!')
    } else {
      console.log('Cannot change title for taskId: ', taskId, 'since it doesnt exist!')
    }
  }

  showChangeTitleForId(taskId: number): void {
    this.showChangeTitleArray.push(taskId);
  }

  removeIdFromChangeTitleArray(taskId: number): void {
    this.showChangeTitleArray = this.showChangeTitleArray.filter(id => id !== taskId);
  }

  



}
