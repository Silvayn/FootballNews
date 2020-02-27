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

  getArticleById(id: String) {
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
   // Update Poste
  updatePost(article) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(article._id)
    return this.http.patch(apiUrl.articles+'/'+article._id, article,httpOptions).subscribe(
        res => { 
          console.log(`${article.titre} updated !`);
        },
        error => {
          console.error('There was an error during the request');
          console.log(error);
        });
  }
}


