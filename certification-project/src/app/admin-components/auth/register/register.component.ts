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
  error: any = {};
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.getLoginStatus()) {
      this.router.navigate(['/adminHome']);
    }
  }

  registerSubmit() {
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        this.router.navigate(['/login']);
        console.log(JSON.stringify(res));
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
