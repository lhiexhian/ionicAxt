import { Component, OnInit } from '@angular/core';
import { Movie } from '../../attributes/movie';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: false,
})
export class MoviesPage implements OnInit {
  public movies: Movie[] = [
    {
      id: 1,
      banner: '../../../assets/banner/1.jpg',
      title: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      synopsis:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      gallery: [
        '../../../assets/gallery/1-1.jpg',
        '../../../assets/gallery/1-2.jpg',
        '../../../assets/gallery/1-3.jpg',
      ],
    },
    {
      id: 2,
      banner: '../../../assets/banner/2.jpg',
      title: 'Inception',
      genre: 'Action, Sci-Fi, Adventure',
      synopsis:
        'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project.',
      gallery: [
        '../../../assets/gallery/2-1.jpg',
        '../../../assets/gallery/2-2.jpg',
        '../../../assets/gallery/2-3.jpg',
      ],
    },
    {
      id: 3,
      banner: '../../../assets/banner/3.jpg',
      title: 'Interstellar',
      genre: 'Adventure, Drama, Sci-Fi',
      synopsis:
        "When Earth becomes uninhabitable, a team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival by finding a new home among the stars.",
      gallery: [
        '../../../assets/gallery/3-1.jpg',
        '../../../assets/gallery/3-2.jpg',
        '../../../assets/gallery/3-3.jpg',
      ],
    },
    {
      id: 4,
      banner: '../../../assets/banner/4.jpg',
      title: 'Spirited Away',
      genre: 'Animation, Adventure, Fantasy',
      synopsis:
        "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
      gallery: [
        '../../../assets/gallery/4-1.jpg',
        '../../../assets/gallery/4-4.jpg',
        '../../../assets/gallery/4-3.jpg',
      ],
    },
    {
      id: 5,
      banner: '../../../assets/banner/5.jpg',
      title: 'Parasite',
      genre: 'Drama, Thriller, Comedy',
      synopsis:
        'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan as secrets unravel.',
      gallery: [
        '../../../assets/gallery/5-1.jpg',
        '../../../assets/gallery/5-2.jpg',
        '../../../assets/gallery/5-3.jpg',
      ],
    },
    {
      id: 6,
      banner: '../../../assets/banner/6.jpg',
      title: 'Gladiator',
      genre: 'Action, Adventure, Drama',
      synopsis:
        'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery as a gladiator.',
      gallery: [
        '../../../assets/gallery/6-1.jpg',
        '../../../assets/gallery/6-2.jpg',
        '../../../assets/gallery/6-3.jpg',
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
