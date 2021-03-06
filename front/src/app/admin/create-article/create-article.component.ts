import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { ChampionnatsService } from 'src/app/services/championnats.service';
import { ClubsService } from 'src/app/services/clubs.service';
import { Championnat } from 'src/app/models/championnat.model';
import { Clubs } from 'src/app/models/clubs.model';
import { log } from 'util';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  championnatsList;
  clubsList;

  dateCreation: Date;
  article: Post;
  titre: string;
  contenu: string;
  payant: boolean;
  image: string;
  championnat: Championnat;
  club: Clubs;
  video: string;
  userId: string;
  userName: string;
  user;

  constructor(private pS: PostsService, private cS: ChampionnatsService, private clubS: ClubsService, private router: Router, private _flash :FlashMessagesService, private uS: UserService) { }

  ngOnInit(): void {
    this.cS.getChampionnats().subscribe((data)=>{this.championnatsList = data;
      this.clubS.getTeams().subscribe((data)=>{this.clubsList = data});
    });
    if(this.uS.isLoggedIn){
      let userId = JSON.parse(localStorage.getItem("home_user")).id;
      let nauserNameme = JSON.parse(localStorage.getItem("home_user")).name;
      this.uS.getUserById(userId).subscribe((data)=>{this.user = data;
      })
    }
  }

  onSubmit(){
    if(!this.titre || !this.contenu){
        this._flash.show('Veuillez remplir tous les champs', { cssClass: 'alert-danger' });
        return false;
    }
    this.dateCreation = new Date();
    /* this.payant == 0 ? false : true; */
    let club = {
      id : this.club.id,
      name: this.club.name
    } 

    let championnat = {
      id : this.championnat.id,
      name: this.championnat.name,
      url: this.championnat.url
    }

    let autheur = {
      id: this.user.id,
      nom: this.user.name
    }
    
    this.article = new Post(this.titre, this.dateCreation, this.contenu, this.payant, this.image = "default.jpg", autheur, club, championnat, this.video, );
    this.pS.createArticle(this.article).subscribe();
    this.router.navigate(['/admin', 'list-articles']);
  }

}
