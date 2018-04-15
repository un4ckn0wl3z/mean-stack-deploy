import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    };
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-logout',
                    template: "\n  <div class=\"col-md-8 col-md-offset-2\">\n    <button class=\"btn btn-danger\" (click)=\"onLogout()\" >Logout</button>\n  </div>\n  "
                },] },
    ];
    /** @nocollapse */
    LogoutComponent.ctorParameters = function () { return [
        { type: AuthService, },
        { type: Router, },
    ]; };
    return LogoutComponent;
}());
export { LogoutComponent };
