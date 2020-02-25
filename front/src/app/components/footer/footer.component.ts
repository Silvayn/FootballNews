import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private pS: PostsService) { }

  articles;

  ngOnInit(): void {
    this.pS.getArticles().subscribe((data) => {this.articles = data});
  }

}
