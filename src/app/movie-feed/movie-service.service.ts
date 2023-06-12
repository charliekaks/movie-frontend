import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map,  } from 'rxjs';
import { Movie } from './Movie';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {
  constructor(private http: HttpClient) { }
  
  apiUrl = 'http://localhost:3000/api/v1/feed';

  getPopularMovies(): Observable<Movie>{
    return this.http.get<Movie>(this.apiUrl,httpOptions).pipe(
      
    )
  }
}
