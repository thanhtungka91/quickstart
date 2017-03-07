import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

import { Hero } from './hero'
// create constant variable -> for bindling

@Component({
  selector: 'my-heroes',
  // create for hear
  templateUrl: 'app/templates/app.html',
  styleUrls: ['app/public/heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
