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
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  getLoginStatus() {
    return this.authService.getLoginStatus();
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
