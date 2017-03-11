import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {  HeroService }  from './hero.service';
import { Hero }  from './mock-heroes';

@Component({
  selector: 'my-heroes',
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

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}

