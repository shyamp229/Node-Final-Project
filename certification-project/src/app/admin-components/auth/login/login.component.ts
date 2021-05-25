import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = {};
  error: any = {};
  data: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // check user auth.
    if (this.authService.getLoginStatus()) {
      this.router.navigate(['/adminHome']);
    }
  }

  loginSubmit() {
    this.authService.loginUser(this.login).subscribe(
      (res) => {
        // console.log(JSON.stringify(res));
        // set token to local storage.
        this.data = jwt_decode(res.token);
        localStorage.setItem('token', res.token);
        // console.log(JSON.stringify(this.data));
        // navigate to adminHome if login is successful
        this.router.navigate(['/adminHome']);
        //alert('successful login');
      },
      (err) => {
        // display error
        this.error = err.error;
      }
    );
  }
}
