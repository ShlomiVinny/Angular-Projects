import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  deselectHero(){
    console.log('Deselect All!')
    
    
  }

  title = 'Tour Of Heroes';
  content = 'content';
}
