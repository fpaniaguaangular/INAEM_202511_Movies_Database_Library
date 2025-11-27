import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesLibrary } from './movies-library';

describe('MoviesLibrary', () => {
  let component: MoviesLibrary;
  let fixture: ComponentFixture<MoviesLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
