import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient) { }

  subscription: Subscription;
  data: Object;

  ngOnInit() {
    this.callServer();
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  callServer(){
    this.subscription = this.http.get(environment.api).subscribe(this.setData());
  }

  setData(){

    return data=>{
      this.data = data;
    console.log(data);
      
    }
  }
  


}
