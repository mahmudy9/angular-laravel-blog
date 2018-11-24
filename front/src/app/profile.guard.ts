import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.Token.isLoggedIn()){

          return true;
      
      } else {
          this.router.navigate(['/login'])
          return false;
      }
    }

  
  constructor(private Token:TokenService,
              private router:Router) {

  }
}
