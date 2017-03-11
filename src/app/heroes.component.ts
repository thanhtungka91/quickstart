// import { Component, OnInit } from '@angular/core';
//
// import { HeroService } from './hero.service';
//
// import { Hero } from './hero'
// // create constant variable -> for binding
//
// // import Route
// import { Router , ActivatedRoute, Params } from '@angular/router';
//
// // before list all the heroes -> in the case highlight 1 hero
// import 'rxjs/add/operator/switchMap';
// import { Observable } from 'rxjs/Observable';
//
// @Component({
//   selector: 'my-heroes',
//   // create for hear
//   templateUrl: 'app/templates/heroes.component.html',
//   styleUrls: ['app/public/heroes.component.css'],
// })
//
// export class HeroesComponent implements OnInit {
//   // heroes: Hero[];
//   // heroes is observable
//   heroes: Observable<Hero[]>;
//   // not heroid is selected before
//
//   private selectedId: number;
//   selectedHero: Hero;
//   constructor(
//     private router: Router,
//     private heroService: HeroService,
//     private route: ActivatedRoute,
//   )
//   { }
//
//   // getHeroes(): void {
//   //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
//   // }
//
//   // ngOnInit(): void {
//   //   this.getHeroes();
//   // }
//
//   // now we have to map 2 value, 1 is selectedId and list full heroes
//   ngOnInit() {
//     this.heroes = this.route.params
//       .switchMap((params: Params) => {
//         this.selectedId = +params['id'];
//         return this.heroService.getHeroes();
//       });
//   }
//   // in the case has been selected before -> change color in css
//   isSelected(hero: Hero) {
//     return hero.id === this.selectedId;
//   }
//
//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//     // this.router.navigate(['/detail', this.selectedHero.id]);
//   }
//   gotoDetail(): void {
//     this.router.navigate(['/detail', this.selectedHero.id]);
//   }
//   gotoDetail2(): void{
//     this.router.navigate(['/detail2', this.selectedHero.id])
//   }
// }


// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero, HeroService }  from './hero.service';

@Component({
  templateUrl: 'app/templates/heroes.component.html',
  styleUrls: ['app/public/heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;

  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getHeroes();
      });
  }

  isSelected(hero: Hero) { return hero.id === this.selectedId; }

  onSelect(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}


/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
