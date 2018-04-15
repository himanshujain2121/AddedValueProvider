import { Component, OnInit } from '@angular/core';
import { User } from '../services/login/user';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private route:Router,
    private loginService:LoginService) { }

  ngOnInit() { 
  }

  login(){
    if(this.loginService.login(this.user)){
      //redirect user
      this.route.navigate(['employee']);
    }
    // show error
  }

}
