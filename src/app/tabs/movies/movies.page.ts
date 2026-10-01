import { Component, OnInit } from '@angular/core';
import { MovieinfoServices } from '../../services/movieinfoServices/movieinfo-services';
import { Movie } from '../../attributes/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: false,
})
export class MoviesPage implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MovieinfoServices) {}

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}
