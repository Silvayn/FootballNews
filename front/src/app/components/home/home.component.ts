import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles;
  constructor(private p: PostsService) { }

  ngOnInit(){
    this.p.getArticles().subscribe((data) => {this.articles = data});
  }

  getExtract(txt, max = 150){
    if(txt.length >= max){
        txt = txt.substr(0, max);
        let result = txt.lastIndexOf(' ');
        txt = txt.substr(0, result) + ' [...]';
    }
    return txt;
  }

}
