import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  data: any = {};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.data = this.authService.getLoginStatus();
    console.log(this.data);
    if (this.data == null) {
      this.router.navigate(['/unauthorised']);
      return false;
    } else {
      return true;
    }
    //can u decode using jwt_decode function
    // can u retrieve the user type
    // if usertype is admin then return true
    // if not route to login ===> return false

    return true;
  }
}
