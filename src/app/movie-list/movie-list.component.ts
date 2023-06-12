import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie-feed/Movie';
import { MovieServiceService } from '../movie-feed/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies: Movie[];
constructor(private movieService:MovieServiceService){}
  ngOnInit(): void {
     this.movieService.getPopularMovies().subscribe(
        (resp)=>{
          this.movies = resp;
        }
     )
  }
}
