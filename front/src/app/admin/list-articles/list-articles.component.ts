import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles;

  constructor(private pS: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.pS.getArticles().subscribe((data)=>{this.articles = data});
    
  }

  onDelete(id: string){
    this.pS.deleteArticle(id);
    this.router.navigate(['/admin/list-articles']);
  }

}
