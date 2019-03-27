import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  
  
  hero : Hero;
  heroes = HEROES;


  selectedHero: Hero;
  onSelect(hero: Hero) : void {
  this.selectedHero = hero;
  console.log(hero)
  
}


  constructor() { }

  ngOnInit() {
  }
}
