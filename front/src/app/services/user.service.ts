import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { User } from '../models/user.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _flash:FlashMessagesService,private http: HttpClient , private _router:Router) { }

  createUser(user: User){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<User>(apiUrl.register, user, httpOptions);
  }
  auth(user) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(apiUrl.auth, user, httpOptions).map(resp => resp);
      
  }

  saveUserDate(token, user) {
    localStorage.setItem("AuthToken", token);
    localStorage.setItem("home_user", JSON.stringify(user));
  }
  isLoggedIn() :boolean {
    //TODO: Enhace this method. angular2-jwt
    return !!localStorage.getItem("AuthToken");
  }
  logOut() {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("home_user");
  }

}
