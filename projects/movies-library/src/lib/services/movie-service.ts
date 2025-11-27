import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private URL : string = 'https://fpaniaguaangular.github.io/movies/movies-2020s.json';
  private httpClient = inject(HttpClient);
  public httpSignal : WritableSignal<any> = signal(null);
  constructor() {
    this.httpClient.get(this.URL).subscribe((data)=>{
      this.httpSignal.set(data);
    });
  }
}
