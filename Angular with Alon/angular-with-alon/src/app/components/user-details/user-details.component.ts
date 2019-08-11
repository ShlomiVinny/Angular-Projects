import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DalService } from 'src/app/services/dal-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  userId: any;
  userData: Array<any>;
  subscription: Subscription;

  constructor(private dal: DalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => { this.userId = queryParams.get('userId'), this.getUserDataFromService(this.userId) })
    console.log('user details displayed for userId:', this.userId);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getUserDataFromService(userId: number): void {
    let query = '?id=' + userId;
    let url = 'users' + query;
    this.subscription = this.dal.getDataFromUrl(url).subscribe(data => this.userData = data)
  }


}
