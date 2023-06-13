import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
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
  moviesFeed: Movie[];
  details:Movie;
  apiUrl = 'http://localhost:3000/api/v1/feed';

  getPopularMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiUrl,httpOptions).pipe(
      tap((resp) => {
        console.log(resp)
        this.moviesFeed= {...resp}
      }),
      catchError((error)=>{
        console.log(error);
        return throwError(() => error);
      })
    )
  }
  getAMovie(id:any): Observable<Movie>{
    return this.http.get<Movie>(this.apiUrl + `/${id}`, httpOptions).pipe(
      tap((resp)=>{
        this.details = resp;
      }),
      catchError((error)=>{
        console.log(error);
        return throwError(()=> error)
      })
    )
  }
}
