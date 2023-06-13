import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-feed/movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie-feed/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movie: Movie;
  constructor(private movieService:MovieServiceService, private route:ActivatedRoute){}
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.movieService.getAMovie(id).subscribe(
        (resp)=>{
          this.movie = resp;
        }
      )
  }
}
