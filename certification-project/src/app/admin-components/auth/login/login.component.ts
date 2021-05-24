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
    if (this.authService.getLoginStatus()) {
      this.router.navigate(['/adminHome']);
    }
  }

  loginSubmit() {
    this.authService.loginUser(this.login).subscribe(
      (res) => {
        // console.log(JSON.stringify(res));

        this.data = jwt_decode(res.token);

        localStorage.setItem('token', res.token);
        console.log(JSON.stringify(this.data));
        this.router.navigate(['/adminHome']);
        //alert('successful login');
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
