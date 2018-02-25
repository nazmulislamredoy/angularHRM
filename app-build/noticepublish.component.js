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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var NavigationManager_1 = require("./services/NavigationManager");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var NoticePublishComponent = (function () {
    function NoticePublishComponent(router, navigationManager) {
        var _this = this;
        this.router = router;
        this.navigationManager = navigationManager;
        this.showNavBar = true;
        this.activeMenu = "noticepublish";
        this.navigationManager.showNavBarEmitter.subscribe(function (mode) {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                _this.showNavBar = mode;
            }
        });
        this.navigationManager.menuActivationEmitter.subscribe(function (menuName) {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (menuName !== null) {
                _this.activeMenu = menuName;
            }
        });
    }
    NoticePublishComponent.prototype.ngOnInit = function () {
    };
    NoticePublishComponent.prototype.hideNoticeDeleteModal = function () {
        this.noticeDeleteModal.hide();
    };
    NoticePublishComponent.prototype.deleteNotice = function (event) {
        this.noticeDeleteModal.config.backdrop = false;
        this.noticeDeleteModal.show();
    };
    NoticePublishComponent.prototype.confirmNoticeDeleteModal = function (event) {
        //
    };
    return NoticePublishComponent;
}());
__decorate([
    core_1.ViewChild('noticeDeleteModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], NoticePublishComponent.prototype, "noticeDeleteModal", void 0);
NoticePublishComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app/html/noticepublish.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, NavigationManager_1.NavigationManager])
], NoticePublishComponent);
exports.NoticePublishComponent = NoticePublishComponent;
//# sourceMappingURL=noticepublish.component.js.map