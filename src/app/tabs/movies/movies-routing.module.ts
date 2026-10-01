import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailPage } from '../../movie-detail/movie-detail.page';
import { MoviesPage } from './movies.page';
const routes: Routes = [
  {
    path: '',
    component: MoviesPage,
  },
  {
    path: 'movie-detail/:id',
    loadChildren: () =>
      import('../../movie-detail/movie-detail.page').then(
        (m) => m.MovieDetailPage
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule {}
