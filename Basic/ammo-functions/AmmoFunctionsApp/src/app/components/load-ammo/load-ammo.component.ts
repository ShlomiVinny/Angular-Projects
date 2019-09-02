import { Component, OnInit, OnDestroy, Output, EventEmitter, OnChanges, Input, AfterViewInit, ElementRef } from '@angular/core';
import { DisplayLoadAmmoService } from 'src/app/services/display-load-ammo.service';
import { DalService } from 'src/app/services/dal.service';
import { Subscription } from 'rxjs';
import { Style } from 'src/app/models/style.model';
import { ContainerStyle } from 'src/app/models/container-style.model';
import { SpanStyle } from 'src/app/models/span-style.model';
import { CdkDragEnd, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-load-ammo',
  templateUrl: './load-ammo.component.html',
  styleUrls: ['./load-ammo.component.css']
})
export class LoadAmmoComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private loadAmmoService: DisplayLoadAmmoService, private dal: DalService) { }

  @Output() hideContextMenu = new EventEmitter<Boolean>();
  @Input() style: Style;

  subscription: Subscription;
  subscription2: Subscription;
  display: Boolean;
  ammoSlots: Array<number> = [1, 2, 3, 4]; //4 slots by default
  styleArray: Array<Style> = [];
  selectedMode: string;
  chosenAmmoStyles: Array<Style> = [];
  amountValues: Array<Object> = [];
  draggedElement: ElementRef;
  position: string;
  top: number;
  left: number;
  margin: number = 10;
  windowPosition: string;
  windowTop: number;
  windowLeft: number;
  count: number = 0;

  svg1: Array<Style> = [];
  svg2: Array<Style> = [];
  svg3: Array<Style> = [];
  svg4: Array<Style> = [];


  ngOnInit() {
    this.subscription = this.loadAmmoService.getDisplay().subscribe(value => { this.display = value; this.ngOnChanges() });
    this.subscription2 = this.dal.getObservable().subscribe(data => this.handleStyleData(data));
    this.dal.getAll(this.subscription2);
    console.log('LOAD AMMO: Subscribed To Service');

    this.setPosition('relative', 10, 10);
  }

  ngOnChanges() {
    if (this.display) {
      console.log('Emmiting hide context menu event');
      this.hideContextMenu.emit(true)
    }
  }

  ngOnDestroy() {
    this.hideLoadAmmo();
    this.subscription.unsubscribe();
  }

  handleStyleData(data: Style) {
    if (data === undefined) { return; }
    else if (data.type === 'mag' && !this.styleArray.includes(data)) { this.styleArray.push(data); return;}
    else if (data.type === 'ammo'){
    let style = new Style();
    let span = new SpanStyle();
    let container = new ContainerStyle();
    Object.assign(style, data);
    Object.assign(span, data.span);
    Object.assign(container, data.container);
    style.container = container;
    style.span = span;
    style.container.position = 'absolute';
    style.container.top = 10 + 0;
    style.container.left = 10 + 64 * this.count;

    this.chosenAmmoStyles.push(style);
    console.log('chosen ammo styles:');
    this.count++;
    }
  }

  hideLoadAmmo(): void {
    this.display = false;
    this.chosenAmmoStyles = [];
    this.amountValues = [];
    this.styleArray = [];
    this.loadAmmoService.setDisplay(false);
  }

  setPosition(position: string, x: number, y: number): void {
    this.position = position;
    this.left = x;
    this.top = y;
  }

  setWindowPosition(left: number, top: number) {
    this.windowTop = top;
    this.windowLeft = left;
    this.windowPosition = 'fixed';
  }

  preventDefaults($event) {
    $event.preventDefault();
    $event.stopImmediatePropagation();
  }


  handleNewValue($event) {
    this.preventDefaults($event);
    let value = $event.currentTarget.value;
    let id = $event.currentTarget.id;

    this.amountValues = this.amountValues.filter(obj => obj['id'] !== id)
    this.amountValues.push({ 'id': id, 'value': value })
  }

  dragEndRect(event): void {
    console.log(event);

    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
      
  
    // let pickupPos: { x: number, y: number } = $event.item._dragRef['_pickupPositionInElement'];
    // let distance: { x: number, y: number } = $event.distance;
    // let position: { x: number, y: number } = { x: $event.item.element.nativeElement.offsetLeft + pickupPos.x, y: $event.item.element.nativeElement.offsetTop + pickupPos.y }
    // let droppedPosition: { x: number, y: number } = { x: position.x + distance.x, y: position.y + distance.y }
    // let remainder: { x: number, y: number } = { x: droppedPosition.x % 64, y: droppedPosition.y % 64 }
    // let correctedPosition: { x: number, y: number } = { x: droppedPosition.x - remainder.x + this.margin, y: droppedPosition.y - remainder.y + this.margin }
    
    // this.setNewStyle($event.item.element.nativeElement.id, correctedPosition.x, correctedPosition.y);
  }

  dragEnd($event): void {
    let pickupPos: { x: number, y: number } = $event.source._dragRef['_pickupPositionInElement'];
    let distance: { x: number, y: number } = $event.distance;
    let position: { x: number, y: number } = { x: $event.source.element.nativeElement.offsetLeft + pickupPos.x, y: $event.source.element.nativeElement.offsetTop + pickupPos.y }
    let droppedPosition: { x: number, y: number } = { x: position.x + distance.x, y: position.y + distance.y }
    let remainder: { x: number, y: number } = { x: droppedPosition.x % 64, y: droppedPosition.y % 64 }
    let correctedPosition: { x: number, y: number } = { x: droppedPosition.x - remainder.x + this.margin, y: droppedPosition.y - remainder.y + this.margin }

    this.setNewStyle(this.draggedElement.nativeElement.id, correctedPosition.x, correctedPosition.y);
    this.setDraggedElement(undefined);
  }

  dropImg($event, element): void {
    if (element === this.draggedElement) { return; }
    this.draggedElement = undefined;
    //console.log('%c DROP ON IMG:', 'color: green', 'OFFSET: x:', offsetX, 'y:', offsetY);
  }

  setDraggedElement($event) {
    if ($event === undefined) { this.draggedElement = undefined; return; }
    let element = $event.source.element;
    this.draggedElement = element;
  }


  setNewStyle(element: string, x: number, y: number): void {

    let tempStyle = this.chosenAmmoStyles.filter(val => val.element === element);
    tempStyle[0].container.top = y;
    tempStyle[0].container.left = x;
    console.log('setNewStyle for:', element);
  }

  handleWindowDrag($event) {
    console.log($event);
    
    this.preventDefaults($event);

    let x = $event.clientX
    let y = $event.clientY

    this.setWindowPosition(x, y);

    console.log('New window position:', x, y);

  }



}
