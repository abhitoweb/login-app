import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService} from './user.service';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.userService.getUserLoggedIn()){
          this.router.navigate(['/']);
          console.log("You are not Authenticated");
      }
    return this.userService.getUserLoggedIn();
  }
}
