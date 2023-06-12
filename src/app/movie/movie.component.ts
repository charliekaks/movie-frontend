import { Component, Input } from '@angular/core';
import { Movie } from '../movie-feed/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
 @Input() movie: Movie;
}
