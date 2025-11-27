import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { MovieComponent } from '../../../movies-library/src/lib/components/movie-component/movie-component'
import { MovieComponent } from 'movies-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MovieComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}
