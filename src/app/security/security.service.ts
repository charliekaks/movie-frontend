import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { UserAuthBase } from './user-auth-base';
import { UserBase } from './user-base';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})


export class SecurityService {
userAuth: UserAuthBase = new UserAuthBase();
  constructor(private http: HttpClient) { }
  apiUrl='http://localhost:3000/api/auth/login'
  login(user:UserBase): Observable<UserAuthBase>{
    return this.http.post<UserAuthBase>(this.apiUrl, user, httpOptions).pipe(
      tap((resp)=>{
        Object.assign(this.userAuth, resp)
      }),
      catchError((error)=>{
        console.log(error);
        return throwError(() => error);
      })
    )
  }
  
}
