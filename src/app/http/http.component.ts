import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/templates/http.component.html',
  styleUrls: ['app/public/heroes.component.css'],
})
export class HttpComponent implements OnInit {
  // heroes: Observable<Hero[]>;

  private selectedId: number;

  constructor(
    // private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }

  // isSelected(hero: Hero) {
  //   return hero.id === this.selectedId;
  // }

  // onSelect(hero: Hero) {
  //   this.router.navigate(['/detail', hero.id]);
  // }
}

