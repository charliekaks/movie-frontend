import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { UserBase } from '../security/user-base';
import { SecurityService } from '../security/security.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { UserAuthBase } from '../security/user-auth-base';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  returnUrl : string | undefined;
  constructor(private securityService: SecurityService, 
    private router: Router, 
    private route: ActivatedRoute ){}
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')!;
  this.myForm = new FormGroup({
    email : new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password : new FormControl('', Validators.compose([
      Validators.required,
      Validators.min(8)
    ]))
  })
  }
  appUser:UserAuthBase = new UserAuthBase();
  login(user:UserBase){
        console.log(user.email);
        this.appUser.init();
        this.securityService.login(user).subscribe(
          resp => {
            localStorage.setItem("AuthObject", JSON.stringify(resp))
            this.appUser = resp;
            if (this.returnUrl) {
              this.router.navigateByUrl(this.returnUrl)
            }
          }
        )
  }
}
