import { Component } from "@angular/core";
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    template: "\n  <header class=\"row\">\n  <nav class=\"col-md-8 col-md-offset-2\">\n    <ul class=\"nav nav-pills\">\n      <li routerLinkActive=\"active\" ><a [routerLink]=\"['/messages']\" >Messenger</a></li>\n      <li routerLinkActive=\"active\"><a [routerLink]=\"['/auth']\" >Authentication</a></li>\n    </ul>\n  </nav>\n</header>\n  "
                },] },
    ];
    return HeaderComponent;
}());
export { HeaderComponent };
