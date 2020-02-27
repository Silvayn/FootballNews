import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles;

  constructor(private pS: PostsService, private router: Router, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
    this.pS.getArticles().subscribe((data)=>{this.articles = data});
    
  }

  onDelete(id: string){
    this.pS.deleteArticle(id);
    this.router.navigate(['/admin', 'list-articles']);
  }

}
