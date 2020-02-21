export class Post {
    
    titre: string;
    dateCreation: Date;
    contenu : String;
    payant  : Boolean;
    image : String;
    autheur: {
      id: number,
      nom: string
    };
    championnat: {
        id: number,
        name: string
    };
    teams: {
        id: number,
        name: string
    }
    
    constructor(t: string, d: Date, c: string, p: Boolean, i: string) {
        this.titre = t;
        this.dateCreation = d;
        this.contenu = c;
        this.payant = p;
        this.image = i;
      }
}
