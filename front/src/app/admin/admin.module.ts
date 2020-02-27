import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChampionnatsService } from 'src/app/services/championnats.service';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { PostsService } from '../services/posts.service';
import { ClubsService } from '../services/clubs.service';
import { TeamsService } from '../services/teams.service';
import { CreateArticleComponent } from './create-article/create-article.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ListArticlesComponent,
    CreateArticleComponent,
    UpdateArticleComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminComponent ,
        children: [
          { path: 'list-articles', component: ListArticlesComponent }, // List All Articles
          { path: 'create-article', component: CreateArticleComponent },
          { path: 'update-article/:id', component: UpdateArticleComponent } // List All Articles
        ]
      },
    ]),
    HttpClientModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule
  ],
  providers: [
    ChampionnatsService,
    PostsService,
    ClubsService,
    TeamsService
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
