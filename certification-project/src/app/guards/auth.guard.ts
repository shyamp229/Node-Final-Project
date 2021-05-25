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
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  data: any = {};
  token: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // this.data = this.authService.getLoginStatus();
    this.token = localStorage.getItem('token')
    this.data = jwt_decode(this.token);

    // console.log(this.data);
    if (this.data == null) {
      this.router.navigate(['/unauthorised']);
      return false;
    } else {
      // check if user exists in db else auth will fail.
      if (this.authService.getSingleUser(this.data.id, this.token)) {
        return true;
      }
      return false;
    }
    //can u decode using jwt_decode function
    // can u retrieve the user type
    // if usertype is admin then return true
    // if not route to login ===> return false

    return true;
  }
}
