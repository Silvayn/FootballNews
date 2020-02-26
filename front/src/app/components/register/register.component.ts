import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User ;
  name: string;
  email: string;
  password: string;

  constructor(private _flashMessagesService: FlashMessagesService,
    private _userService: UserService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  
  submit() {

    if (!this.name || !this.email || !this.password) {
      this._flashMessagesService.show('Veuillez remplir tous les champs', { cssClass: 'alert-danger' });
      return false;
    }
    console.log(this.name, this.email, this.password)
    this.user = new User(this.name, this.email, this.password);
    this._userService.createUser(this.user).subscribe((data) => {console.log('created user');});
    this._flashMessagesService.show('compte bien créé', { cssClass: 'alert-success' } );
    this._router.navigate(['/login']);
  }
}
