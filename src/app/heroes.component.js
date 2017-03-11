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
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO SOMEDAY: Feature Componetized like CrisisCenter
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.route.params
            .switchMap(function (params) {
            _this.selectedId = +params['id'];
            return _this.service.getHeroes();
        });
    };
    HeroesComponent.prototype.isSelected = function (hero) { return hero.id === this.selectedId; };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.router.navigate(['/detail', hero.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/templates/heroes.component.html',
            styleUrls: ['app/public/heroes.component.css'],
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
/*
 Copyright 2017 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
//# sourceMappingURL=heroes.component.js.map