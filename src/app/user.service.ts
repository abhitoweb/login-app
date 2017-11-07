import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private isUserLoggedIn:boolean = false;
  public userName:string;
  users = [
    {user:"clarion@clarion.com", password:"Clarion123"},
    {user:"a", password:"a"}
  ];

  constructor() {
    this.isUserLoggedIn=false;
  }
  login(userName,pwd){
    let i:number;

    for(i=0;i<this.users.length;i++){
      if(this.users[i].user==userName && this.users[i].password){
        this.isUserLoggedIn=true;
        this.userName = this.users[i].user.split('@')[0];
        //this.userName=this.users[i].user;
        break;
      }
    }
    return this.isUserLoggedIn;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
