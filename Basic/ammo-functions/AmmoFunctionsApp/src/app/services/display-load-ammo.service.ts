import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Style } from '../models/style.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayLoadAmmoService {

  constructor() { }

  display: boolean;
  
  
  subject = new Subject<boolean>();
  subject2 = new Subject<Style>();

  setDisplay(value: boolean): void {
    this.display = value;
    this.subject.next(this.display);
    console.log('%c DISPLAY LOAD AMMO SERVICE: display:', 'color: red', value);
  }

  getDisplay(): Observable<boolean> {
    return this.subject.asObservable();
  }

  setChosenAmmo(style: Style): void {
    if (!this.display || style === null) { return; }
    this.subject2.next(style);
    console.log('%c DISPLAY LOAD AMMO SERVICE: new element recieved:', 'color: red');
    console.log(style);
    
  }

  getChosenAmmo(): Observable<Style> {
    return this.subject2.asObservable();
  }
}
