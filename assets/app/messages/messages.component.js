import { Component } from "@angular/core";
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
    }
    MessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-messages',
                    template: "\n  <div class=\"row\">\n  <app-message-input></app-message-input>\n  <br><br>\n  <app-message-list></app-message-list>\n</div>\n  "
                },] },
    ];
    return MessagesComponent;
}());
export { MessagesComponent };
