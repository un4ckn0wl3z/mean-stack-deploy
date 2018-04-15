import { Message } from "./message.model";
import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from "../errors/error.service";
var MessageSerevice = /** @class */ (function () {
    function MessageSerevice(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.messages = [];
        this.messageIsEdit = new EventEmitter();
    }
    MessageSerevice.prototype.addMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post('https://mymeanstack-deploy.herokuapp.com/message' + token, body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var message = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
            _this.messages.push(message);
            return message;
        }).catch(function (error) {
            console.log(error);
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageSerevice.prototype.getMessages = function () {
        var _this = this;
        return this.http.get('https://mymeanstack-deploy.herokuapp.com/message').map(function (response) {
            var messages = response.json().obj;
            var transFormedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                transFormedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
            }
            _this.messages = transFormedMessages;
            return transFormedMessages;
        }).catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageSerevice.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    MessageSerevice.prototype.updateMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch('https://mymeanstack-deploy.herokuapp.com/message/' + message.messageID + token, body, { headers: headers })
            .map(function (response) { return response.json(); }).catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageSerevice.prototype.deleteMessage = function (message) {
        var _this = this;
        this.messages.splice(this.messages.indexOf(message), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete('https://mymeanstack-deploy.herokuapp.com/message/' + message.messageID + token)
            .map(function (response) { return response.json(); }).catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageSerevice.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessageSerevice.ctorParameters = function () { return [
        { type: Http, },
        { type: ErrorService, },
    ]; };
    return MessageSerevice;
}());
export { MessageSerevice };
