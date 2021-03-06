import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  hero : Hero;
  heroes : Hero[];

  selectedHero: Hero;
  onSelect(hero: Hero) : void {
  this.selectedHero = hero;
  console.log(hero)
}

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data => this.heroes = data)
  }

  ngOnInit() {
  }

}
