import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ClubsArticlesComponent } from './components/clubs-articles/clubs-articles.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'championnat',
    children: [
      { path: ':championnat', component: ArticlesComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'clubs',
    children: [
      { path: ':club', component: ClubsArticlesComponent, pathMatch: 'full' },
    ]
  },
  { path: ':championnat/:id', component: ArticleComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
