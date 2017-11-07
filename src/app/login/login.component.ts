import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit() {
  }
  loginUser(userName, password){
    if(this.userService.login(userName.value,password.value)){
      this.router.navigate(['/dashboard']);
    }
  }
}
