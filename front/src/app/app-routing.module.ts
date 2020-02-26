import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ClubsArticlesComponent } from './components/clubs-articles/clubs-articles.component';
import { ClubsEffectifsComponent } from './components/clubs-effectifs/clubs-effectifs.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent}, // HomePage
  {
    path: 'championnat',
    children: [
      { path: ':championnat', component: ArticlesComponent, pathMatch: 'full' }, // List Articles Championnats
    ]
  },
  {
    path: 'clubs',
    children: [
      {
        path: ':club', children: [
          { path: 'actualites', component: ClubsArticlesComponent, pathMatch: 'full' }, // List Articles Championnats
          { path: 'effectif', component: ClubsEffectifsComponent, pathMatch: 'full' }, // List Articles Championnats
        ]
      },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
  { path: ':championnat/:id', component: ArticleComponent, pathMatch: 'full' } // Détail Article
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
