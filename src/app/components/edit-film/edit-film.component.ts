import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/Film';
import { FilmsService } from 'src/app/services/films.service';


@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css']
})
export class EditFilmComponent implements OnInit {

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

  setChanges() {
    this.filmService.changeFilm(this.film).subscribe(film => {
      alert("Успех!") 
    },
    ()=>alert("Произошла ошибка!"))
  }

}
