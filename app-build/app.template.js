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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppTemplate = /** @class */ (function () {
    function AppTemplate() {
    }
    AppTemplate = __decorate([
        core_1.Component({
            selector: 'app',
            template: '<navbar></navbar>' +
                '<app-leftmenubar></app-leftmenubar><router-outlet></router-outlet>' +
                '<app-footer></app-footer>',
        }),
        __metadata("design:paramtypes", [])
    ], AppTemplate);
    return AppTemplate;
}());
exports.AppTemplate = AppTemplate;
//# sourceMappingURL=app.template.js.map