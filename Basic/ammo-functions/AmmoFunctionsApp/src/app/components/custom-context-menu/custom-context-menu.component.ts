import { Component, OnInit, Input } from '@angular/core';
import { DisplayLoadAmmoService } from 'src/app/services/display-load-ammo.service';



@Component({
  selector: 'app-custom-context-menu',
  templateUrl: './custom-context-menu.component.html',
  styleUrls: ['./custom-context-menu.component.css']
})
export class CustomContextMenuComponent implements OnInit {

  constructor(private loadAmmoService: DisplayLoadAmmoService) { }

  ngOnInit() {}

  @Input() display: Boolean;
  @Input() offsetX: Number;
  @Input() offsetY: Number;
  @Input() elementType: String;

  showLoadAmmo: Boolean;

  displayLoadAmmo(){
  
    this.loadAmmoService.setDisplay(true);
    this.display=false;
  }
}



