import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user;

  constructor(private uS: UserService, private router: Router) { }

  ngOnInit(): void {
    if(this.uS.isLoggedIn){
      let id = JSON.parse(localStorage.getItem("home_user")).id;
      this.uS.getUserById(id).subscribe((data)=>{this.user = data;
      })
    }
  }

  submit(e){
    e.preventDefault()
    this.uS.updateUser(this.user).subscribe((data)=>{this.user = data;});
  }
  
}
