import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { ClubsService } from 'src/app/services/clubs.service';
import { ChampionnatsService } from 'src/app/services/championnats.service';

@Component({
  selector: 'app-clubs-articles',
  templateUrl: './clubs-articles.component.html',
  styleUrls: ['./clubs-articles.component.css']
})
export class ClubsArticlesComponent implements OnInit {

  clubUrl: string;
  club;
  articles;
  standingsList;

  constructor(private router: ActivatedRoute, private cS: ChampionnatsService, private pS: PostsService, private clubS: ClubsService) { }

  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.clubUrl = params.get('club');
      this.clubS.getTeamsByUrl(this.clubUrl).subscribe((data) =>{
        this.club = data;
        this.pS.getArticlesByClub(this.club.id).subscribe((data) => this.articles = data);
        this.cS.getChampionnatStandings(this.club.activeCompetitions[0].id).subscribe((data) => this.standingsList = data)
      });
    });
  }

  getExtract(txt, max = 150){
    if(txt.length >= max){
        txt = txt.substr(0, max);
        let result = txt.lastIndexOf(' ');
        txt = txt.substr(0, result) + ' [...]';
    }
    return txt;
  }

  getUri(txt: string){
    let regex = / /gi;
    let result = txt.replace(regex, '-');
    return result;
  }

}
