import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChampionnatsService } from 'src/app/services/championnats.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article;
  id;
  urlVideo;
  urlSafe: SafeResourceUrl;
  standingsList;
  constructor(private p: PostsService, private route: ActivatedRoute, private cS: ChampionnatsService, public sanitizer: DomSanitizer) { }

  ngOnInit(){
    // Récupere id dans l'url
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.id = params.get('id');
      this.p.getArticleById(this.id).subscribe(data => {this.article = data;
      this.cS.getChampionnatStandings(this.article?.championnat?.id).subscribe((data) => this.standingsList = data);
        this.urlVideo = this.article.video;
        this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.urlVideo);
      });
      
    });
  }

}
