import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HeroService } from './http-api.services'
import { Hero } from './http-api.services'
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/templates/http.component.html',
  styleUrls: ['app/public/heroes.component.css'],
})

export class HttpComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  errorMessage: string;
  heroes: Hero[];
  mode = 'Observable';

  constructor(private heroService: HeroService) { }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(
        heroes => this.heroes = heroes,
        error =>  this.errorMessage = <any>error);
  }
  // addHero (name: string) {
  //   if (!name) { return; }
  //   this.heroService.addHero(name)
  //     .subscribe(
  //       hero  => this.heroes.push(hero),
  //       error =>  this.errorMessage = <any>error);
  // }

  ngOnInit() { this.getHeroes(); }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
}


