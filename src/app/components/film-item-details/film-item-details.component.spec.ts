import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemDetailsComponent } from './film-item-details.component';

describe('FilmItemDetailsComponent', () => {
  let component: FilmItemDetailsComponent;
  let fixture: ComponentFixture<FilmItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
