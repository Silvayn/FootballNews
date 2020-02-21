import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChampionnatsService {

  constructor(private http: HttpClient) { }

  getChampionnats() {
    return this.http.get(apiUrl.championnats);
  }
  getChampionnatByName(pays?: string) {
    console.log(apiUrl.championnats+'?pays='+pays)
    return this.http.get(apiUrl.championnats+'?pays='+pays);
  }
  getChampionnatById(id: number) {
    return this.http.get(apiUrl.championnats + '/' + id);
  }

}
