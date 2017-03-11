import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';
import { Router } from '@angular/router'

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/templates/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  // server get the data
  // get Hero -> return  promise -? subscrible
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);

    //other way Onit, more simple
    // let id = +this.route.snapshot.params['id'];
    //
    // this.heroService.getHero(id)
    //   .then((hero: Hero) => this.hero = hero);
  }
// back to previous url
  goBack(): void {
    this.location.back();
  }
// other way to back exactly the link
  gobacktoHeroes(): void{
    // this.router.navigate(['/heroes'], this.heroService.getHeroes())
    let heroId = this.hero ? this.hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }
}
