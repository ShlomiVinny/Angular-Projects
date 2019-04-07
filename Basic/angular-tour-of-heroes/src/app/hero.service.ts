import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { HEROES } from './heroes';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor( private http:HttpClient, private messageService: MessageService) { }

  

  getHeroes(): Observable<Hero[]> {

    //add a message thorugh message service
    this.messageService.add(
      'HeroService: fetched heroes'
      );
      console.log('message service engaged');
      
    //observable code stuff thingy...
    // const url = 'http://iitc-400:3000/angularRXTest';
    // let data = this.http.get<Hero[]>(url);
    //   return data;
    return of(HEROES);
  }

  
}
