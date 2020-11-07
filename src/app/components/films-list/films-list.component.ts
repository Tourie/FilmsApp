import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Film } from '../../models/Film'
import { FilmsService } from '../../services/films.service'

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  constructor(
    private filmsService: FilmsService
  ) { }

  films: Film[]
  type: string

  ngOnInit(): void {
   this.filmsService.getFilms().subscribe(films => {
     this.films = films
   });
    this.type = "list"
  }

  toList() {
    this.type = "list"
  }

  toCard() {
    this.type = "card"
  }
}
