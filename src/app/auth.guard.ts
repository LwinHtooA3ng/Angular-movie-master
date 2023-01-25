import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    // let val : string = localStorage.getItem("isUserLoggedIn");
    let myVal = localStorage.getItem("isUserLoggedIn");
    if(myVal == null || myVal == "false") {
      return true;
    } else {
      this.router.navigateByUrl("/");
      return false;
    }

  }
  
}
