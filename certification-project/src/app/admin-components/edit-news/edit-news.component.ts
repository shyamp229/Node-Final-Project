import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { News } from 'src/app/models/news';
import { ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css'],
})
export class EditNewsComponent implements OnInit {
  news: News = new News();
  error: any = {};
  data = {
    name: '',
    email: '',
  };
  id: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.data = jwt_decode(localStorage.getItem('jwtToken'));
    this.id = this.route.snapshot.params.id;
    this.authService.getSingleNews(this.id).subscribe(
      (res) => {
        this.news = res;
        console.log(this.news);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }

  EditNews() {
    //console.log(this.news);
    this.authService.updateNews(this.id, this.news).subscribe(
      (res) => {
        this.router.navigate(['/newsList']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
