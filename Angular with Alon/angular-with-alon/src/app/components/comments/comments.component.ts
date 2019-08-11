import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { DalService } from 'src/app/services/dal-service.service';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy, OnChanges {


  commentData: Observable<Array<object>>;
  showComments: boolean = false;
  subscription: Subscription;
  subscription2: Subscription;

  @Input() userName: string;
  @Input() userSelected: boolean;

  constructor(private dal: DalService, private userDetailsService: UserDetailsService) { }


  ngOnInit() { }

  ngOnChanges() {
    if (this.userSelected) {
      this.getPostIdFromService();
    } else {
      this.commentData = null;
      this.showComments = false;

    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription2.unsubscribe();
  }


  getDataFromService(postId): void {
    if (isNumber(postId)) {
      console.log('getting comment data by postId from service');
      let query = '?postId=' + postId;
      let url = 'comments' + query;
      this.subscription = this.dal.getDataFromUrl(url).pipe(map(data => data.filter(task => task.postId === postId))).subscribe(data => { this.commentData = data, this.showComments = true; });
    }
  }

  getPostIdFromService() {
    this.subscription2 = this.userDetailsService.getPostId().subscribe(postId => {
      if (isNumber(postId)) {
        this.getDataFromService(postId)
      } else {
        this.commentData = null;
        this.showComments = false;
      }
    });
  }





}
