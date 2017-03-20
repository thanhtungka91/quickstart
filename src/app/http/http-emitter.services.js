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
// () after Injectable very import
var EmitterService = (function () {
    function EmitterService() {
    }
    EmitterService.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new core_1.EventEmitter();
        return this._emitters[ID];
    };
    // event store
    EmitterService._emitters = {};
    EmitterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmitterService);
    return EmitterService;
}());
exports.EmitterService = EmitterService;
//# sourceMappingURL=http-emitter.services.js.map