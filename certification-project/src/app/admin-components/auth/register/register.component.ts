import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  data: any = {};
  error: any = {};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.getLoginStatus()) {
      this.data = {};
      this.router.navigate(['/login']);
    } else {
      this.data = localStorage.getItem('jwtToken');
    }
  }

  registerSubmit() {
    this.authService.registerUser(this.register, this.data).subscribe(
      (res) => {
        alert("Successfully registered new admin!")
        // localStorage.setItem('jwtToken', res.token);
        this.router.navigate(['/adminHome']);
        // console.log(JSON.stringify(res));
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
