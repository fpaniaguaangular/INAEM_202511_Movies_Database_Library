import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL : string = 'https://fpaniaguaangular.github.io/movies/movies-2020s.json';
  private httpClient = inject(HttpClient);
  getMovies() {
    return this.httpClient.get(this.URL);
  }
}
