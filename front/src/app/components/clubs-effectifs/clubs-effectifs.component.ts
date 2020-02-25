import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ChampionnatsService } from 'src/app/services/championnats.service';
import { ClubsService } from 'src/app/services/clubs.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-clubs-effectifs',
  templateUrl: './clubs-effectifs.component.html',
  styleUrls: ['./clubs-effectifs.component.css']
})
export class ClubsEffectifsComponent implements OnInit {

  clubUrl: string;
  club;

  constructor(private router: ActivatedRoute, private cS: ChampionnatsService, private pS: PostsService, private clubS: ClubsService) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.clubUrl = params.get('club');
      this.clubS.getTeamsByUrl(this.clubUrl).subscribe((data) =>{
        this.club = data;
      });
    });
  }

  getUri(txt: string) {
    let regex = / /gi;
    let result = txt.replace(regex, '-');
    return result;
  }

  getAge(birthday) {
    birthday = new Date(birthday);
    return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
  }

}
