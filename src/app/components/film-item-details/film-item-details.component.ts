import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Film } from 'src/app/models/Film';
import { FilmsService } from '../../services/films.service'
import { FilmItemComponent } from '../film-item/film-item.component';
import { FilmsListComponent } from '../films-list/films-list.component'

@Component({
  selector: 'app-film-item-details',
  templateUrl: './film-item-details.component.html',
  styleUrls: ['./film-item-details.component.css']
})
export class FilmItemDetailsComponent implements OnInit {

  id: number
  film: Film
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsService,
    private router: Router
  ) { 
    route.params.subscribe(params => this.id = params['id'])
  }

  ngOnInit(): void {
    this.filmService.getFilmById(this.id).subscribe(film => {
      this.film = film
    },
    () => this.router.navigateByUrl("/error404")
    )}

}
