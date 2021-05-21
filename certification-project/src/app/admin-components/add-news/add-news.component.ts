import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import jwt_decode from 'jwt-decode';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  news: News = new News();
  error: any = {};
  data: any = {};
  token: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.data = jwt_decode(localStorage.getItem('jwtToken'));
    this.token = localStorage.getItem('jwtToken');
    if (!this.authService.getLoginStatus()) {
      this.router.navigate(['/login'])
    }
  }

  addNews() {
    console.log(this.news);
    this.authService.addNews(this.news, this.token).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(['/newsList']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
