import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'articles',
    children: [
      {path: ':id', component: ArticleComponent, pathMatch: 'full'},
      {path: '', component: ArticlesComponent, pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
