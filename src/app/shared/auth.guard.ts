import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private securityService:SecurityService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let claimValue =route.data['claimType'];
      let auth = localStorage.getItem('AuthObject');
      if(auth){
        Object.assign(this.securityService.userAuth, JSON.parse(auth))
      }
      let isAuth  = this.securityService.userAuth.isAuthenticated;
      let claimStatus = this.securityService.userAuth.getClaimProperty(this.securityService.userAuth,claimValue);

      if (isAuth && claimStatus) {
        return true;
      } else {
        this.router.navigate(['/login'], {queryParams: {returnUrl:state.url}});
        return false;
      }
  }
  
}
