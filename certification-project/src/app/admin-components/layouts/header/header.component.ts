import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  data: any = {};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void { }

  // constantly check for login status
  ngOnChanges() {
    this.getLoginStatus();
  }
  // verify is user is logged in
  getLoginStatus() {
    return this.authService.getLoginStatus();
  }

  // logon clears the localStorage
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
