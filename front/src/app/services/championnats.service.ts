import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChampionnatsService {

  constructor(private http: HttpClient) { }

  getChampionnats() {
    return this.http.get(apiUrl.championnats);
  }

  getChampionnatByPays(pays?: string) {
    return this.http.get(apiUrl.championnats + '?pays=' + pays);
  }

  getChampionnatByName(name?: string) {
    return this.http.get(apiUrl.championnats + '?name=' + name);
  }

  getChampionnatByUrl(url?: string) {
    return this.http.get(apiUrl.championnats + '?url=' + url);
  }

  getChampionnatById(id: number) {
    return this.http.get(apiUrl.championnats + '/' + id);
  }

  getChampionnatStandings(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Auth-Token': 'eda9f01bea6145e9bb8f1ece137021b9'
      })
    };
    return this.http.get('http://api.football-data.org/v2/competitions/'+id+'/standings?standingType=TOTAL', httpOptions);
  }


}
