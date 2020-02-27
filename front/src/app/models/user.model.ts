export class User {

 
constructor( n: string = "", e: string, p: string = "", a: boolean = false, admin: boolean = false) {
    this.name = n;
    this.email = e; 
    this.password = p;
    this.abonne = a;
    this.admin = admin;
  }
  id: string;
  name: string;
  email: string;
  password: string;
  abonne: boolean;
  admin: boolean;

}