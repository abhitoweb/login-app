import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {FactoryService} from '../factory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName=this.userService.userName;
  products=this.factoryService.products;
  constructor(private userService:UserService, private router:Router, private factoryService:FactoryService) {
    if(this.userService.getUserLoggedIn() == false){
        this.router.navigate(['/']);
    }
   }

  ngOnInit() {
  }

}
