import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
article;
id : String
  titre: string;
  contenu: string;

  constructor(private pS: PostsService, 
       private _flash :FlashMessagesService 
     , private route: ActivatedRoute,
     private _router :Router) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.pS.getArticleById(this.id).subscribe(data => {this.article = data});
  }


  onSubmit(){
    this.pS.updatePost(this.article);
    this._router.navigate(['/admin', 'list-articles']);
    this._flash.show('article bien changé ', { cssClass: 'alert-success' });
  }
  
}
