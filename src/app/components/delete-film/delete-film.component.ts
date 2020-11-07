import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/Film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-delete-film',
  templateUrl: './delete-film.component.html',
  styleUrls: ['./delete-film.component.css']
})
export class DeleteFilmComponent implements OnInit {

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

  deleteFilm() {
    this.filmService.deleteFilm(this.film).subscribe( () => {
      this.router.navigateByUrl("films")
    },()=> { alert("При удалении что-то пошло не так...") })
  }

}
