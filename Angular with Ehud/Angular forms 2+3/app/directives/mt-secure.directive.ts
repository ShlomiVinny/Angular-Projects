import { SimpleChanges, Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appMtSecure]'
})
export class MtSecureDirective implements OnInit, OnChanges {
  userIsLoggedIn = false;
  @Input() userIsNotLoggedInColor: string;

  constructor(private el: ElementRef) {
    console.log('from constructor of directive');
  }

  ngOnInit(): void {
    console.log('from ngOnInit of directive');
    this.setParentBackgroundColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('from ngOnChanges of directive');
    this.setParentBackgroundColor();
  }

  private setParentBackgroundColor() {
    if (this.userIsLoggedIn === true) {
      this.el.nativeElement.style.backgroundColor = 'blue';
    } else {
      this.el.nativeElement.style.backgroundColor = this.userIsNotLoggedInColor;
      console.log();
    }
  }
}
