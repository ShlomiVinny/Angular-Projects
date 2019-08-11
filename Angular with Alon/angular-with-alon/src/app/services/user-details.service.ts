import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isNumber } from 'util';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  postId: number;

  subject = new BehaviorSubject<number>(this.postId);

  sendPostIdToComments(postId: number) {
    if(isNumber(postId)){
      console.log('Recieved postId to send to comments comp:', postId);
      this.subject.next(postId);
    }else{
      console.log('postId is not a number! make all comments disappear');
      this.subject.next(null);
    }
  }

  getPostId(): Observable<number> {
    return this.subject.asObservable();
  }



}
