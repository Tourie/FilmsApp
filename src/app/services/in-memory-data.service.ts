import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Film } from '../models/Film';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const films = [
      {
        id: 1,
        title: "fdsa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" + 
               "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
               " laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "+
               "cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt "+
               "mollit anim id est laborum. Сillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt "
               ,
        release_date: 2015,
        img_src: "https://robo-hunter.com/uploads/images/13369/news/80_990_455_news_5ba4fedfabefe.jpg"
      },
      {
        id: 2,
        title: "fdsa 2",
        description: "description 2",
        release_date: 2016,
        img_src: "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/26100c5b49f851337109a5f792436a29/960x540"
      },
      {
        id: 3,
        title: "fdsa 3",
        description: "description 3",
        release_date: 2017,
        img_src: "https://cdn.miridei.com/files/img/c/idei-dosuga/kakoi-film-posmotret/april%20movies%202019.jpg"
      },
    ]
    return {films};
  }

  genId(films: Film[]): number {
    return films.length > 0
      ? Math.max(...films.map(todo => todo.id)) + 1
      : 1;
  }
}
