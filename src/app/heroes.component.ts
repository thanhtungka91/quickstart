import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

import { Hero } from './hero'
// create constant variable -> for bindling

import { Router } from '@angular/router';
@Component({
  selector: 'my-heroes',
  // create for hear
  templateUrl: 'app/templates/heroes.component.html',
  styleUrls: ['app/public/heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
