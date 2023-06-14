import { Component } from '@angular/core';
import { UserAuthBase } from './security/user-auth-base';
import { SecurityService } from './security/security.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-Library';
  userAuth: UserAuthBase = new UserAuthBase();
  constructor(private securityService:SecurityService,private route:ActivatedRoute, private router: Router){
    this.userAuth = this.securityService.userAuth;
  }
  logout(){
    this.securityService.logout();
    this.userAuth = this.securityService.userAuth;
    console.log(this.userAuth.isAuthenticated);
    localStorage.removeItem('AuthObject')
    this.router.navigateByUrl('/login');
  }
}
