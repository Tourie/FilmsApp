import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  constructor() { }

  @Input() film: Film
  @Input() type: string

  ngOnInit(): void {
  }

}
