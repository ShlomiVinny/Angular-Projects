import { Component, OnInit, Input } from '@angular/core';
import { DalService } from '../services/dal-service.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private dal: DalService) {
  }
  ngOnInit() {

  }

  currentData: Observable<any>;
  currentUrl: string;
  
    urls = [
      {
        "name": "users",
        "url": "https://jsonplaceholder.typicode.com/users"
      },
      {
        "name": "tasks",
        "url": "https://jsonplaceholder.typicode.com/todos"
      },
      {
        "name": "comments",
        "url": "https://jsonplaceholder.typicode.com/comments"
      },
      {
        "name": "posts",
        "url": "https://jsonplaceholder.typicode.com/posts"
      }
    ]

  getDataFromService(url) {
    this.currentData = null;
    this.currentUrl = url;
    this.dal.getDataFromUrl(url).subscribe(data => this.currentData = data);
    console.log('getting data from service with url: ', url);
  }







}
