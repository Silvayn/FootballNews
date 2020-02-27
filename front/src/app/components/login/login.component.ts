import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private _userService :UserService,
    private _flash :FlashMessagesService,
    private _router :Router
  ) { }

  ngOnInit() {}

  onLogin(){

    if (  !this.email || !this.password) {
      this._flash.show('Veuillez remplir tous les champs', { cssClass: 'alert-danger' });
      return false;
    }
    

    const user = {
      email: this.email,
      password: this.password
    }
    
    this._userService.auth(user).subscribe(
      resp => {
        if (!resp['success']) {
          this._flash.show("ce compte n'existe pas ou le mot de passe est incorrect", { cssClass: 'alert-danger'});
          return false;
        }
        this._userService.saveUserDate(resp['token'], resp['user']);
        let name =  JSON.parse(localStorage.getItem("home_user")).name;   
        this._flash.show('Ravi de vous revoir ' + name, { cssClass: 'alert-success' } );
        this._router.navigate(['/']);
        
      }
    );

  }
}
