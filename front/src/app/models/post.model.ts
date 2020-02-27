import { Championnat } from './championnat.model';
import { Team } from './team.model';
import { Clubs } from './clubs.model';

export class Post {

  titre: string;
  dateCreation: Date;
  contenu: String;
  payant: Boolean;
  image: String;
  autheur: {
    id: number,
    nom: string
  };
  teams: {
    id: number;
    name: string;
  };
  championnat: {
    id: number;
    name: string;
    url: string;
  };
  video: string;


  constructor(t: string, d: Date, c: string, p: boolean, i: string, autheur, teams, championnat, v: string = '') {
    this.titre = t;
    this.dateCreation = d;
    this.contenu = c;
    this.payant = p;
    this.image = i;
    this.autheur = autheur;
    this.teams = teams;
    this.championnat = championnat;
    this.video = v;
  }
}