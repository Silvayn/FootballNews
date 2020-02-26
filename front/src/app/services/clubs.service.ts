import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(apiUrl.clubs);
  }

  getTeamsById(id) {
    return this.http.get(apiUrl.clubs + '?id=' + id);
  }

  getTeamsByUrl(club?: string) {
    return this.http.get(apiUrl.clubs + '?club=' + club);
  }

  getTeamsMatchs(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Auth-Token': 'eda9f01bea6145e9bb8f1ece137021b9'
      })
    };
    return this.http.get('http://api.football-data.org/v2/teams/'+id+'/matches?status=SCHEDULED', httpOptions);
  }

}
