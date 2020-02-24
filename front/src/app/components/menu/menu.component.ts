import { Component, OnInit } from '@angular/core';
import { ChampionnatsService } from 'src/app/services/championnats.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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

  constructor(private champ: ChampionnatsService) { }

  ngOnInit() {
    this.championnats = [];
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

}
