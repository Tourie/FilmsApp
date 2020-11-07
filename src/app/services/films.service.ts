import { Injectable } from '@angular/core';
import { from, throwError } from 'rxjs';
import { Film } from '../models/Film'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FilmsService {

  filmsUrl: string = "api/films"

  constructor(
    private http: HttpClient
  ) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(
      `${this.filmsUrl}`
    )
  }

  getFilmById(id: number): Observable<Film> {
    return this.http.get<Film>(
      `${this.filmsUrl}/${id}`
    ).pipe (
      catchError(this.handleError)
    );
  }

  handleError() {
    return throwError(
      'This user doesn\'t exist' 
    )
  }

  changeFilm(film: Film) {
    const url = `${this.filmsUrl}/${film.id}`
    return this.http.put(
      url, film, httpOptions
    )
  }

  deleteFilm(film: Film) {
    const url = `${this.filmsUrl}/${film.id}`
    return this.http.delete<Film>(
      url, httpOptions
    )
  }

  createFilm(film: Partial<Film>) {
    return this.http.post<Partial<Film>>(
      this.filmsUrl, film, httpOptions
    )
  }
}
