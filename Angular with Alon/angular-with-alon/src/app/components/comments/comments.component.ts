import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DalService } from 'src/app/services/dal-service.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {


  commentData: Array<any>;
  showComments: boolean = false;
  commentsDisplayedForPostId: number;
  subscription: Subscription;
  subscription2: Subscription;
  postId: number;

  @Input() userName: string;



  constructor(private dal: DalService, private userDetailsService: UserDetailsService) { }


  ngOnInit() {
    this.getPostIdFromService();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }


  getDataFromService() {
    if (this.postId !== null) {
      console.log('getting comment data by postId from service');
      let query = '?postId=' + this.postId;
      let url = 'comments' + query;
      this.subscription = this.dal.getDataFromUrl(url).pipe(map(data => data.filter(task => task.postId === this.postId))).subscribe(data => this.commentData = data)
    } else {
      this.commentData = null;
    }
  }

  getPostIdFromService() {
    this.subscription2 = this.userDetailsService.getPostId().subscribe(postId => { this.postId = postId, this.getDataFromService() });
    console.log('COMMENTS Recieved postId from service:', this.postId);

  }





}
