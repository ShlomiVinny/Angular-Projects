import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DalService } from 'src/app/services/dal-service.service';
import { map } from 'rxjs/operators';
import { isNumber } from 'util';
import { Subscription } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnChanges {

  postData: Array<any>;
  currentlyShownCommentsForPostId: number;
  showPostBodyArray: Array<number> = [];
  subscription: Subscription;


  @Input() userId: number;
  @Input() userName: string;

  constructor(private dal: DalService, private userDetailsService: UserDetailsService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.getDataFromService();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getDataFromService(): void {
    if (isNumber(this.userId)) {
      console.log('getting post data from service');
      let query = '?userId=' + this.userId;
      let url = 'posts' + query;
      this.subscription = this.dal.getDataFromUrl(url).pipe(map(data => data.filter(task => task.userId === this.userId))).subscribe(data => this.postData = data)
    }else{
      this.postData = null;
      console.log('UserId is null! Cant get data!');
    }
  }


  showComments(postId: number, $event: Event): void {
    $event.preventDefault();
    $event.stopImmediatePropagation();
    
    if (this.currentlyShownCommentsForPostId !== postId) {
      this.userDetailsService.sendPostIdToComments(postId);
      this.currentlyShownCommentsForPostId = postId;
    } else {
      this.userDetailsService.sendPostIdToComments(null);
      this.currentlyShownCommentsForPostId = null;
    } 
  }


  showPostBodyMethod(postId: number): void {
    if (!this.showPostBodyArray.includes(postId)) {
      this.showPostBodyArray.push(postId);
      console.log('Added postId:', postId, 'to display array');
    } else {
      this.showPostBodyArray = this.showPostBodyArray.filter(value => value !== postId);
      if(this.currentlyShownCommentsForPostId === postId){
         this.showComments(this.currentlyShownCommentsForPostId, new Event(''));
      }
      console.log('Successfuly removed:', postId, 'from display array');
    }

  }




}
