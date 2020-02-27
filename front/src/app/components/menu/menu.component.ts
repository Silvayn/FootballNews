import { Component, OnInit } from '@angular/core';
import { ChampionnatsService } from 'src/app/services/championnats.service';
import { UserService } from 'src/app/services/user.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user;
  admin;
  championnats;
  objectKeys = Object.keys;
  objectValues = Object.values;
  pays = [
    { 'France': 'France' },
    { 'England': 'Angleterre' },
    { 'Spain': 'Espagne' },
    { 'Italy': 'Italie' },
    { 'Europe': 'Coupe d\'Europe' }
  ];
  u: any;

  constructor(private champ: ChampionnatsService ,
     public  _userService : UserService,
     private _router : Router) { }

  ngOnInit() {
    this.championnats = [];
    this.admin = this._userService.isAdmin();
    this.pays.forEach(elt => {
      let paysEn = Object.keys(elt)[0];
      var paysFr = Object.values(elt)[0];
      this.champ.getChampionnatByPays(paysEn).subscribe((data) => {
        let item = {'pays': paysFr}
        Object.assign(item, data[0]);
        this.championnats.push(item);
      });
    });
    
  }

  onLogOutClicked(){
    this._userService.logOut();
    this._router.navigate(['/login']);
    return false;
  }
  
}
