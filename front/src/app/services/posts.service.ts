import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(apiUrl.articles);
  }

  getArticleById(id: number) {
    return this.http.get(apiUrl.articles + '/' + id);
  }

  getArticlesByChampionnat(champ) {
    return this.http.get(apiUrl.articles + '?championnat=' + champ);
  }

  getArticlesByClub(club) {
    return this.http.get(apiUrl.articles + '?club=' + club);
  }

}


