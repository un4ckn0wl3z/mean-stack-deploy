import { Component } from "@angular/core";

@Component({
  selector:'app-messages',
  template:`
  <div class="row">
  <app-message-input></app-message-input>
  <br><br>
  <app-message-list></app-message-list>
</div>
  `
})
export class MessagesComponent {

}