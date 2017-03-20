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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var HTTPTestService = (function () {
    function HTTPTestService(http_test) {
        this.http_test = http_test;
        // get current time
        this.httpUrl = "http://138.197.79.103:8080/api/categories";
    }
    HTTPTestService.prototype.getCategories = function () {
        return this.http_test.get(this.httpUrl)
            .map(function (res) { return res.json(); });
    };
    // create new category
    HTTPTestService.prototype.postCategory = function (body) {
        // create temp category object
        var category = JSON.stringify(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http_test.post(this.httpUrl, category, options)
            .map(function (res) { return res.json(); });
        //   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    // update category
    HTTPTestService.prototype.updateCategory = function (body) {
        var category = JSON.stringify(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var editUrl = this.httpUrl + '/' + body['id'];
        return this.http_test.put(editUrl, category, options)
            .map(function (res) { return res.json; });
    };
    // delete category
    HTTPTestService.prototype.deleteCateory = function (id) {
        debugger;
        var deleteUrl = this.httpUrl + '/' + id;
        return this.http_test.delete(deleteUrl)
            .map(function (res) { return res.json(); });
    };
    HTTPTestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HTTPTestService);
    return HTTPTestService;
}());
exports.HTTPTestService = HTTPTestService;
//# sourceMappingURL=http-api.services.js.map