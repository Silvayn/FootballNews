import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(apiUrl.clubs);
  }

  getTeamsByChampionnat(club?: string) {
    return this.http.get(apiUrl.clubs + '?club=' + club);
  }

}
