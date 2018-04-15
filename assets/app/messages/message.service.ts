import { Message } from "./message.model";
import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';

import {Observable} from 'rxjs';
import { ErrorService } from "../errors/error.service";

@Injectable() 
export class MessageSerevice {

  private messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>();

  constructor(
    private http:Http,
    private errorService: ErrorService
  ) {
    
  }

  addMessage(message: Message){
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type':'application/json'});
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
    return this.http.post('https://mymeanstack-deploy.herokuapp.com/message'+token,body,{headers:headers})
    .map((response: any) => {
      const result = response.json();
      const message =  new Message(
        result.obj.content,result.obj.user.firstName,result.obj._id,result.obj.user._id
      );
      this.messages.push(message);
      return message;
    }).catch(
      (error: any) => {
        console.log(error);
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      }
    );

  }
  getMessages(){
    return this.http.get('https://mymeanstack-deploy.herokuapp.com/message').map((response: any) => {
      const messages = response.json().obj;
      let transFormedMessages: Message[] = [];
      for(let message of messages){
        transFormedMessages.push(new Message(message.content, message.user.firstName,message._id,message.user._id) );
      }
      this.messages = transFormedMessages;
      return transFormedMessages;
    }).catch(
      (error: any) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      }
    );
  }

  editMessage(message: Message){
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message){
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type':'application/json'});
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
    return this.http.patch('https://mymeanstack-deploy.herokuapp.com/message/'+message.messageID+token,body,{headers:headers})
    .map((response: any) => response.json()).catch(
      (error: any) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      }
    );
  }

  deleteMessage(message: Message){
    this.messages.splice(this.messages.indexOf(message),1);
    const token = localStorage.getItem('token') ? '?token='+localStorage.getItem('token') : '';
    return this.http.delete('https://mymeanstack-deploy.herokuapp.com/message/'+message.messageID+token)
    .map((response: any) => response.json()).catch(
      (error: any) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      }
    );
  }
}