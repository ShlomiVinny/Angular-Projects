import { Component, OnInit, OnDestroy } from '@angular/core';
import { DalService } from '../../services/dal-service.service'
import { Observable, Subscription } from 'rxjs';
import { isNumber } from 'util';
import { Router } from '@angular/router';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit, OnDestroy {


  userData: Observable<Array<object>>;
  subscription: Subscription;
  selectedUserName: string;
  selectedUserId: number;
  userSelected: boolean;
  postId: number;

  constructor(private dal: DalService, private router: Router) {
  }
  ngOnInit() {
    this.getUserDataFromService();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUserDataFromService(): void {
    let url = 'users';
    this.subscription = this.dal.getDataFromUrl(url).subscribe(data => { this.userData = data });
  }

  selectUser(userId: number): void {
    if (isNumber(userId)) {
      if (this.selectedUserId !== userId) {
        this.getUserNameById(userId);
        console.log('selected user name: ', this.selectedUserName);
        this.selectedUserId = userId;
        console.log("Select user id: ", userId);
        this.userSelected = true;
      } else if (this.selectedUserId === userId) {
        this.selectedUserId = null;
        this.userSelected = false;
        console.log("Deselect user id: ", userId);
      }
    }
  }

  getUserNameById(userId: number): any {
    this.userData.forEach(val => {
      if (val["id"] === userId) {
        let name = val["name"];
        this.setSelectedUserName(name)
      }
    })
  }

  setSelectedUserName(name: string): string {
    return this.selectedUserName = name;
  }

  navigateToUserDetails(userId: number): void {
    this.router.navigate(['/user-details'], { queryParams: { userId: userId } });
  }

  

}
