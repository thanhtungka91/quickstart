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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_component_1 = require('./http.component');
var http_routing_module_1 = require('./http-routing.module');
var http_api_services_1 = require("./http-api.services");
var platform_browser_1 = require("@angular/platform-browser");
var HttpApiModule = (function () {
    function HttpApiModule() {
    }
    HttpApiModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                http_routing_module_1.HttpRoutingModule
            ],
            declarations: [
                http_component_1.HttpComponent
            ],
            providers: [http_api_services_1.HTTPTestService]
        }), 
        __metadata('design:paramtypes', [])
    ], HttpApiModule);
    return HttpApiModule;
}());
exports.HttpApiModule = HttpApiModule;
//# sourceMappingURL=http.module.js.map