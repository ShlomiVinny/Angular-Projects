import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor() { }

  postId: number;

  subject = new BehaviorSubject<number>(this.postId);

  sendPostIdToComments(postId: number) {
    console.log('Recieved postId to send to comments comp:', postId);
    this.subject.next(postId)
  }

  getPostId(): Observable<number> {
    return this.subject.asObservable();
  }



}
