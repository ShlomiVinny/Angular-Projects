import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit, OnDestroy {

  message: string;
  

  constructor(private router: Router) {
    
    console.log('main constructor');
   }

  ngOnInit() {
    console.log('main init');
    
  }

  ngOnDestroy(){
    console.log('main destroy');
  }

  goToURL(link: string){
    this.router.navigateByUrl(link);
  }
}
