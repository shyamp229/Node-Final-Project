import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css'],
})
export class AdminHomePageComponent implements OnInit {
  data: any = {};
  constructor() { }

  ngOnInit(): void {
    // checking if user is auth.
    this.data = jwt_decode(localStorage.getItem('token'));
  }
}
