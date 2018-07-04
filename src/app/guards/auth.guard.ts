import { Injectable } from '@angular/core';
import {User} from '../users_interfaces/users'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  user:User;
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
          this.user = JSON.parse(localStorage.getItem('currentUser'));
            if(this.user.username == "admin" && this.user.password == "K5uGP8m" ){
              return true;
            }

        }

        // not logged in so redirect to login page with the return url
        alert("Username or Password wrong, try again.")
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
