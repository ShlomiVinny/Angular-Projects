import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
  currentPostData: any;
  currentlyShownCommentsForPostId: number;
  showPostBodyArray: Array<number> = [];
  subscription: Subscription;


  @Input() userId: number;
  @Input() userName: string;

  constructor(private dal: DalService, private userDetailsService: UserDetailsService) { }

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
     
      let url = 'posts';
      this.subscription = this.dal.getDataFromUrl(url).subscribe(data => this.postData = data);
      // .pipe(map(data => data.filter(task => task.userId === this.userId)))
  }

  filterDataByUserId(): void{
    console.log('Filtering post data');
    if(isNumber(this.userId)){
      this.currentPostData = this.postData.filter(value => this.userId===value.userId);
    }else{
      this.currentPostData = null;
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
