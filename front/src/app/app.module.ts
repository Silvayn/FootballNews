import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { ClubsArticlesComponent } from './components/clubs-articles/clubs-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleComponent,
    ClubsArticlesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
