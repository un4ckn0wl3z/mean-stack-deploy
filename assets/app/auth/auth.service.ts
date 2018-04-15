import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    private errorService: ErrorService
  ) {
    
  }

  signup(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('https://mymeanstack-deploy.herokuapp.com/user',body,{headers:headers}).map((response: any) => response.json()).catch(
      (error: any) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      }
    );
  }

  signin(user: User){
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('https://mymeanstack-deploy.herokuapp.com/user/signin',body,{headers:headers}).map((response: any) => response.json()).catch(
      (error: any) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      }
    );
  }

  logout(){
    localStorage.clear();
  }

  isLoggedIn(){
    return localStorage.getItem('token') !== null;
  }


}