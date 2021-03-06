import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string="";
  id:string="";
  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.name  = this.activatedRoute.snapshot.params.name;
    this.id = this.activatedRoute.snapshot.params.id;
  }
}