import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-genre-container',
  templateUrl: './genre-container.component.html',
  styleUrls: ['./genre-container.component.css']
})
export class GenreContainerComponent implements OnInit {

  @Input('genre') genre: Genre;

  movies: Movie[];

  constructor(private readonly movieservice:MovieService) { }

  ngOnInit(): void {

    this.movieservice.getMoviesInGenre(this.genre.id).subscribe(data => {this.movies = data
    console.log(data)
    });
    
    
  }

}
