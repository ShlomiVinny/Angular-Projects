import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DalService } from 'src/app/services/dal-service.service';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {


  commentData: Array<any>;
  showComments: boolean = false;
  subscription: Subscription;
  subscription2: Subscription;

  @Input() userName: string;



  constructor(private dal: DalService, private userDetailsService: UserDetailsService) { }


  ngOnInit() {
    this.getPostIdFromService();
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    this.subscription2.unsubscribe();
  }


  getDataFromService(postId) {
    if (isNumber(postId)) {
      console.log('getting comment data by postId from service');
      let query = '?postId=' + postId;
      let url = 'comments' + query;
      this.subscription = this.dal.getDataFromUrl(url).pipe(map(data => data.filter(task => task.postId === postId))).subscribe(data => {this.commentData = data, this.showComments=true})
    } else {
      this.commentData = null;
      this.showComments = false;
    }
  }

  getPostIdFromService() {
    this.subscription2 = this.userDetailsService.getPostId().subscribe(postId => this.getDataFromService(postId));
  }





}
