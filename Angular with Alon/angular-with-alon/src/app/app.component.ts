import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
