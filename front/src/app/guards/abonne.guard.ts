import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { PostsService } from '../services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class AbonneGuard implements CanActivate {

  constructor(private _userService: UserService, private _router: Router, private aR: ActivatedRoute, private p: PostsService) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let id;
    let article;
    let canSee : boolean = true;
    if (this._userService.isAbonne()) {
      canSee = true;
    } else {
      const id = next.params['id'];
      this.p.getArticleById(id).subscribe(data => {
        article = data;
        if (article.payant === true) { // Article payant
          if(this._userService.isLoggedIn()){  // User logué
            // rediriger vers abonnement
            this._router.navigate(['/edit/offres'], { queryParams: { returnUrl: state.url } });
            canSee = false;
          } else { // User non logué
            // rediriger vers inscription
            this._router.navigate(['/abonnement'], { queryParams: { returnUrl: state.url } });
            canSee = false;
          }
        } else { // Article gratuit
          console.log(article.payant)
          console.log("Logué : ",this._userService.isLoggedIn() , " Abonné : ", this._userService.isAbonne(), " peut voir : ", true);
          canSee =  true;
        }
      });
    }
    return canSee;
    

  }

}
