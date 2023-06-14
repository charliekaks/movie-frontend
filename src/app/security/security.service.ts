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
  apiUrl='http://localhost:3000/api/v1/auth/login'
  login(user:UserBase): Observable<UserAuthBase>{
    return this.http.post<UserAuthBase>(this.apiUrl, user, httpOptions).pipe(
      tap((resp)=>{
        console.log(resp)
        this.userAuth.isAuthenticated = true;
        Object.assign(this.userAuth, resp)
      }),
      catchError(this.handleError)
    )
  }

  logout(): void{
      this.userAuth.init();
  }
  

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
    }
    return throwError(()=>errorMessage);
  }
}
