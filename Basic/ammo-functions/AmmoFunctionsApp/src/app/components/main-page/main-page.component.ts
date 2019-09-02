import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, NgZone } from '@angular/core';
import { DisplayLoadAmmoService } from 'src/app/services/display-load-ammo.service';
import { Style } from 'src/app/models/style.model';
import { DalService } from 'src/app/services/dal.service';
import { Subscription } from 'rxjs';
import { CdkDragEnd, CdkDragStart, DragRef, DragRefConfig, DragDropRegistry, CdkDrag } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  constructor(private loadAmmoService: DisplayLoadAmmoService, private dal: DalService, private zone: NgZone) {

  }

  ngOnInit() {
    // subscribe to data service and getAll() the styles
    this.subscription = this.dal.getObservable().subscribe(data => this.handleStyleData(data));
    for (let index = 0; index < 10; index++) { console.log(64 * index) };
    this.dal.getAll(this.subscription);
    this.zone.run(() => { setTimeout(() => { }, 0) });
  }

  ngOnChanges() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  elementArray: Array<ElementRef> = [];
  styleArray: Array<Style> = [];
  mouseIsDown: boolean = false;
  draggedElement: ElementRef;
  chosenAmmo: Array<string> = [];
  showContextMenu: boolean = false;
  offsetX: number;
  offsetY: number;
  currentElementType: string;
  subscription: Subscription;


  handleStyleData(data: Style) {
    if (data === undefined || this.styleArray.includes(data)) { return; }
    this.styleArray.push(data);
  }

  preventDefaults($event) {
    console.log('preventDefaults: $event:');

    console.log($event);

    // $event.preventDefault();
    // $event.stopImmediatePropagation();
  }

  setDraggedElement($event: CdkDragStart) {
    console.log($event);
    if ($event === undefined) { this.draggedElement = undefined; return; }

    let element = $event.source.element;
    this.draggedElement = element;
  }

  dragOver($event): void {

  }

  dragEnd($event: CdkDragEnd) {
    let pickupPos: { x: number, y: number } = $event.source._dragRef['_pickupPositionInElement'];
    let distance: { x: number, y: number } = $event.distance;
    let position: { x: number, y: number } = { x: $event.source.element.nativeElement.offsetLeft + pickupPos.x, y: $event.source.element.nativeElement.offsetTop + pickupPos.y }
    let droppedPosition: { x: number, y: number } = { x: position.x + distance.x, y: position.y + distance.y }
    let remainder: { x: number, y: number } = { x: droppedPosition.x % 64, y: droppedPosition.y % 64 }
    let correctedPosition: { x: number, y: number } = { x: droppedPosition.x - remainder.x, y: droppedPosition.y - remainder.y }

    this.setNewStyle(this.draggedElement.nativeElement.id, correctedPosition.x, correctedPosition.y);
    this.setDraggedElement(undefined);
  }

  dropRect($event): void {

    console.log($event);

    let offsetX = $event.item.element.nativeElement.offsetLeft;
    let offsetY = $event.item.element.nativeElement.offsetTop;
    let distanceX = $event.distance.x + 32;
    let distanceY = $event.distance.y + 32;
    let dropX = offsetX + distanceX;
    let dropY = offsetY + distanceY;
    let remainderX = dropX % 64;
    let remainderY = dropY % 64;
    let correctedOffsetX = offsetX - remainderX;
    let correctedOffsetY = offsetY - remainderY;



    console.log('%c DROP ON RECT:', 'color: green', 'OFFSET: x:', offsetX, 'y:', offsetY);
    console.log('Remainder: x:', remainderX, 'y: ', remainderY);

    console.log('CORRECTED OFFSET: x:', correctedOffsetX, 'y:', correctedOffsetY);
    console.log('dragged element:', this.draggedElement);

    this.setNewStyle(this.draggedElement.nativeElement.id, correctedOffsetX, correctedOffsetY);

  }

  dropImg(element): void {
    console.log('drop image');

    if (element === this.draggedElement) { return; }

    //console.log('%c DROP ON IMG:', 'color: green', 'OFFSET: x:', offsetX, 'y:', offsetY);
  }

  setNewStyle(elementId: string, x: number, y: number): void {
    console.log(elementId);

    let tempStyle = this.styleArray.filter(val => val.element === elementId);
    tempStyle[0].container.top = y;
    tempStyle[0].container.left = x;
    console.log('setNewStyle for:', elementId);
  }

 displayContextMenu($event, type: string): boolean {
    //to prevent default windows context menu from ruining my day I haz to return false; UwU derp
    if ($event === 'OFF') {
      console.log('OFF');
      this.currentElementType = undefined;
      this.showContextMenu = false;
      return false;
    }
    // display context menu where mouse click was
    if ($event.currentTarget) {
      this.offsetX = $event.currentTarget.offsetLeft + $event.offsetX;
      this.offsetY = $event.currentTarget.offsetTop + $event.offsetY;
    }
    this.currentElementType = type;
    this.showContextMenu = true;
    return false;
  }

  hideLoadAmmo() {
    this.loadAmmoService.setDisplay(false);
  }


}
