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
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var hero_service_1 = require('./hero.service');
var router_2 = require('@angular/router');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(router, heroService, route, location) {
        this.router = router;
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    // server get the data
    // get Hero -> return  promise -? subscrible
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.heroService.getHero(+params['id']); })
            .subscribe(function (hero) { return _this.hero = hero; });
        //other way Onit, more simple
        // let id = +this.route.snapshot.params['id'];
        //
        // this.heroService.getHero(id)
        //   .then((hero: Hero) => this.hero = hero);
    };
    // back to previous url
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    // other way to back exactly the link
    HeroDetailComponent.prototype.gobacktoHeroes = function () {
        // this.router.navigate(['/heroes'], this.heroService.getHeroes())
        var heroId = this.hero ? this.hero.id : null;
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/templates/hero-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_2.Router, hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map