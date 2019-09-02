import { Injectable } from '@angular/core';
import { Style } from '../models/style.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DalService {
  constructor() { }

  initialValue = undefined;
  subject = new BehaviorSubject(this.initialValue);

  btStyle: Style = {
    'element': 'bt',
    'type':'ammo',
    'caliber':'5.45x39',
    'src': 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/c/c7/74BTICON.png',
    'position': 'absolute', 'top': 0, 'left': 0,
    'span': { 'top': 46, 'left': 46, 'color': '#CECEB1' },
    'container': { 'position': 'absolute', 'top': 320, 'left': 320 }
  };
    bpStyle: Style = {
  'element': 'bp',
  'type':'ammo',
  'caliber':'5.45x39',
  'src': 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/2/2e/74BPICON.png',
  'position': 'absolute', 'top': 0, 'left': 0,
  'span': { 'top': 46, 'left': 46, 'color': '#CECEB1' },
  'container': { 'position': 'absolute', 'top': 320, 'left': 128 }
};
m855Style: Style = {
  'element': 'm855',
  'type':'ammo',
  'caliber':'5.56x45',
  'src': 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/5/55/M855ICON.png',
  'position': 'absolute', 'top': 0, 'left': 0,
  'span': { 'top': 46, 'left': 46, 'color': '#CECEB1' },
  'container': { 'position': 'absolute', 'top': 512, 'left': 320 }
};
magStyle: Style = {
  'element': 'mag',
  'type':'mag',
  'caliber':'5.45x39',
  'src': 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/6/61/6l31magicon.png',
  'position': 'absolute', 'top': 0, 'left': 0,
  'container': { 'position': 'absolute', 'top': 128, 'left': 128 }
};
mag2Style: Style ={
  'element': 'mag2',
  'type':'mag',
  'caliber':'5.56x45',
  'src': 'https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/9/9a/STANAG_magazine_60-round_MAG5_-5.56x45.png',
  'position': 'absolute', 'top': 0, 'left': 0,
  'container': { 'position': 'absolute', 'top': 128, 'left': 192 }
}; 



getObservable(): Observable<Style>{
  return this.subject.asObservable();
}

getOne(element: string): void{
  switch (element) {
    default: return;
    case 'bt':
      this.subject.next(this.btStyle);
      break;
    case 'bp':
      this.subject.next(this.bpStyle);
      break;
    case 'mag':
      this.subject.next(this.magStyle);
      break;
  }
    console.log('%c DAL SERVICE', 'color: red', 'Sent ONE');
}

getAll(sub: Subscription):void {
  this.subject.next(this.btStyle);
  this.subject.next(this.bpStyle);
  this.subject.next(this.m855Style);
  this.subject.next(this.magStyle);
  this.subject.next(this.mag2Style);
  console.log('%c DAL SERVICE', 'color: red', 'Sent ALL');
  sub.unsubscribe();
}

 

}
