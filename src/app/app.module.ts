import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { AboutAppComponent } from './components/about-app/about-app.component';
import { Error404Component } from './components/error404/error404.component';
import { FilmItemDetailsComponent } from './components/film-item-details/film-item-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { DeleteFilmComponent } from './components/delete-film/delete-film.component';
import { RouterModule } from '@angular/router';
import { CreateFilmComponent } from './components/create-film/create-film.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    FilmItemComponent,
    HeaderComponent,
    AboutAppComponent,
    Error404Component,
    FilmItemDetailsComponent,
    MainPageComponent,
    EditFilmComponent,
    DeleteFilmComponent,
    CreateFilmComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    // CommonModule
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
