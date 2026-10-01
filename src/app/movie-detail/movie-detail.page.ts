import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieinfoServices } from '../services/movieinfoServices/movieinfo-services';
import { Movie } from '../attributes/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: false
})
export class MovieDetailPage implements OnInit {
  public movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieinfoServices
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      const movieId = parseInt(idParam, 10);
      this.movie = this.movieService.getMovieById(movieId);
    }
  }
}
