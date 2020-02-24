import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(apiUrl.teams);
  }

  getTeamsByChampionnat(id?: number) {
    return this.http.get(apiUrl.teams + '?team=' + id);
  }

}
