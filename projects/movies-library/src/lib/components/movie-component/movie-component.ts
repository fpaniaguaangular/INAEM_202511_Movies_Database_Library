import { Component, inject } from '@angular/core';
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
  public peliculaEntontrada : any;
  movieService = inject(MovieService);
  movies : any = [];
  constructor() {
    this.movieService.getMovies().subscribe((data)=>{
      this.movies = data;
      console.log(this.movies);
    })
  }
  public buscar(){
    this.peliculaEntontrada = 
      this.movies.find((p:any)=>p.title.toUpperCase().includes(this.tituloBuscado.toUpperCase()));
  }
}
