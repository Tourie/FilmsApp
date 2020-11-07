import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { fileURLToPath } from 'url';
import { FilmsListComponent } from '../app/components/films-list/films-list.component'
import { AboutAppComponent } from './components/about-app/about-app.component'
import { Error404Component } from './components/error404/error404.component'
import { FilmItemDetailsComponent } from './components/film-item-details/film-item-details.component'
import { MainPageComponent } from './components/main-page/main-page.component'
import { EditFilmComponent } from './components/edit-film/edit-film.component'
import { DeleteFilmComponent } from './components/delete-film/delete-film.component'
import { CreateFilmComponent } from './components/create-film/create-film.component'

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'films', component: FilmsListComponent},
  {path: 'films/create', component: CreateFilmComponent},
  {path: 'films/:id', component: FilmItemDetailsComponent},
  {path: 'films/:id/edit', component: EditFilmComponent},
  {path: 'films/:id/delete', component: DeleteFilmComponent},
  {path: 'about', component: AboutAppComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
