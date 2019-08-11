import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DalService {
  constructor(private http: HttpClient) { }

  domain = "https://jsonplaceholder.typicode.com/";

  getDataFromUrl(url: string): Observable<any> {
    console.log("fetch user data from url: ", url);
    return this.http.get(this.domain + url);
  }

}