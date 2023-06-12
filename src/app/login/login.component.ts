import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { UserBase } from '../security/user-base';
import { SecurityService } from '../security/security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private securityService: SecurityService){}
  ngOnInit(): void {
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
  login(user:UserBase){
        console.log(user.email);
        this.securityService.login(user).subscribe()
  }
}
