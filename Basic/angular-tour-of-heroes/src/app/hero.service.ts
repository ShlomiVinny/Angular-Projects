import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor( private http:HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    const url = 'http://iitc-400:3000/angularRXTest';
    return this.http.get<Hero[]>(url);
  }

}
