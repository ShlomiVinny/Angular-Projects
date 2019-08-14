import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderConfirmationService {

  constructor() { }

  data: object;

  private subject = new BehaviorSubject<object>(this.data);

  setNewData(data: object): void{
    this.data = data;
    this.subject.next(data);
    console.log(data);
    
  }

  getData(): Observable<object>{
    return this.subject.asObservable();
  }


}
