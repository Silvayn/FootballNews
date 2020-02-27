import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/articles/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { ClubsArticlesComponent } from './components/clubs-articles/clubs-articles.component';
import { ClubsEffectifsComponent } from './components/clubs-effectifs/clubs-effectifs.component';
import { RegisterComponent } from './components/register/register.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AbonnementComponent } from './components/abonnement/abonnement.component';
import { OffresComponent } from './components/offres/offres.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ArticlesComponent,
    ArticleComponent,
    ClubsArticlesComponent,
    ClubsEffectifsComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    FourOhFourComponent,
    AbonnementComponent,
    OffresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    AdminModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
