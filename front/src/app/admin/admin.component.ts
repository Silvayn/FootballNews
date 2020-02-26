import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles;

  constructor(private pS: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.pS.getArticles().subscribe((data) => {this.articles = data});
    this.router.navigate(['/admin/list-articles']);
  }

}
