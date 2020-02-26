import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChampionnatsService } from 'src/app/services/championnats.service';
import { PostsService } from 'src/app/services/posts.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  championnat;
  championnatUrl;
  championnatName;
  articles;
  teamsList;
  standingsList;
  constructor(private router: ActivatedRoute, private cS: ChampionnatsService, private pS: PostsService, private tS: TeamsService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.championnatUrl = params.get('championnat');
      this.cS.getChampionnatByUrl(this.championnatUrl).subscribe((data) => {
        this.championnat = data;
        this.pS.getArticlesByChampionnat(this.championnat.id).subscribe((data) => this.articles = data);
        this.tS.getTeamsByChampionnat(this.championnat.id).subscribe((data) => this.teamsList = data);
        this.cS.getChampionnatStandings(this.championnat.id).subscribe((data) => this.standingsList = data)
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
