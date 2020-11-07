import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { title } from 'process';
import { Film } from 'src/app/models/Film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit {

  constructor(
    private filmService: FilmsService,
    private router: Router
  ) { }

  film: Partial<Film>
  title: string = "Введите название"
  release_date: number = 1990
  description: string = "Описание"
  img_src: string = "url"

  ngOnInit(): void {
    
  }

  createFilm(){
    this.film = {
      title: this.title,
      release_date: this.release_date,
      description: this.description,
      img_src: this.img_src
    }
    this.filmService.createFilm(this.film).subscribe(
      () => {
        alert("Фильм успешно добавлен")
        this.router.navigateByUrl("films")
      },
      () => {
        alert("Ошибка! Фильм не был создан!")
      }
    )
  }

}
