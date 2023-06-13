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
  isLoading: boolean= false;
  movie: Movie;
  cast: any;
  constructor(private movieService:MovieServiceService, private route:ActivatedRoute){}
  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.movieService.getAMovie(id).subscribe(
        (resp)=>{
          this.movie = resp;
          this.isLoading = true;
        }
      )
      this.movieService.getCast(id).subscribe(
        (resp)=>{
          console.log(resp);
          this.cast = resp.slice(0,9);
        }
      )
  }
}
