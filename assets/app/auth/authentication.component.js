import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-authentication',
                    template: "\n    <header class=\"row spacing\">\n      <nav class=\"col-md-8 col-md-offset-2\" >\n        <ul class=\"nav nav-tabs\" >\n          <li routerLinkActive=\"active\"><a [routerLink]=\"['signup']\">Signup</a></li>\n          <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['signin']\">Signin</a></li>\n          <li routerLinkActive=\"active\" *ngIf=\"isLoggedIn()\"><a [routerLink]=\"['logout']\">Logout</a></li>\n        </ul>\n      </nav>\n    </header>\n\n    <div class=\"row spacing\">\n      <router-outlet></router-outlet>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AuthenticationComponent.ctorParameters = function () { return [
        { type: AuthService, },
    ]; };
    return AuthenticationComponent;
}());
export { AuthenticationComponent };
