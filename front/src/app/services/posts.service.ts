import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  router: any;

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

  createArticle(article: Post){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Post>(apiUrl.articles, article, httpOptions);
  }

  deleteArticle(id: string) {
    return this.http.delete<Post>(apiUrl.articles+'/'+id).subscribe();
  }

  getUri(txt: string){
    let regex = / /gi;
    let result = txt.replace(regex, '-');
    return result;
  }

}


