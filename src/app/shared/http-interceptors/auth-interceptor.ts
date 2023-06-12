import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let auth = undefined;
        let value = localStorage.getItem('AuthObject');
        if(value){
            auth = JSON.parse(value);
        }
        if(auth){
            //Clone the request and replace the original headers with cloned headers, updated with authorization headers
            const authReq = req.clone({
                    headers: req.headers.set(
                        'Authorization', 'Bearer ' + auth.beareToken
                    )});
                    return next.handle(authReq)
        }else{
            return next.handle(req);
        }
    }
}