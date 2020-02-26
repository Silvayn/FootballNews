export class User {

 
constructor( n: string = "", e: string, p: string = "" ) {
    this.name = n;
    this.email = e; 
    this.password = p;
  }
  name: string;
  email: string;
  password: string;

}