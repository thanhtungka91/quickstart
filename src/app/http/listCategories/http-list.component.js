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
var http_api_services_1 = require("../http-api.services");
var HttpListComponent = (function () {
    function HttpListComponent(httpTest) {
        this.httpTest = httpTest;
        this.editing = false;
    }
    HttpListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    // list all category
    HttpListComponent.prototype.getCategories = function () {
        var _this = this;
        this.httpTest.getCategories()
            .subscribe(function (data) { return _this.getData = data; }, function (error) { return _this.errorMessage = error; });
    };
    HttpListComponent = __decorate([
        core_1.Component({
            selector: 'category-list',
            templateUrl: '../../../app/http/listCategories/http-list.component.html',
            styleUrls: ['../../../app/public/http.component.css'],
        }), 
        __metadata('design:paramtypes', [http_api_services_1.HTTPTestService])
    ], HttpListComponent);
    return HttpListComponent;
}());
exports.HttpListComponent = HttpListComponent;
//# sourceMappingURL=http-list.component.js.map