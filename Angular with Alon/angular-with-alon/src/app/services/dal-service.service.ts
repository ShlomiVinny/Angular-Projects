import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DalService {
  constructor(private http: HttpClient){}

  //url: string;
  domain = "https://jsonplaceholder.typicode.com/";

  getDataFromUrl(url): Observable<any> {
    console.log("fetch data from url: ", url);
    return this.http.get(this.domain+url);
  }
  
  
}
