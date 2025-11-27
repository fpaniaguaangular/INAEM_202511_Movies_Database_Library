import { Component, effect, inject } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'lib-movie-component',
  imports: [FormsModule],
  templateUrl: './movie-component.html',
  styleUrl: './movie-component.css',
})
export class MovieComponent {
  public tituloBuscado : string ="";
  public peliculaEncontrada : any;
  movieService = inject(MovieService);
  movies : any = [];
  constructor() {
    effect(()=>{
      this.movies=this.movieService.httpSignal();
    });
  }
  public buscar(){
    this.peliculaEncontrada = 
      this.movies.find((p:any)=>p.title.toUpperCase().includes(this.tituloBuscado.toUpperCase()));
  }
}
