import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChampionnatsService } from 'src/app/services/championnats.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article;
  id;
  standingsList;
  constructor(private p: PostsService, private route: ActivatedRoute, private cS: ChampionnatsService) { }

  ngOnInit(){
    // Récupere id dans l'url
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.id = params.get('id');
      this.p.getArticleById(this.id).subscribe(data => {this.article = data;
      this.cS.getChampionnatStandings(this.article?.championnat?.id).subscribe((data) => this.standingsList = data);
      });
      
    });
  }

}
