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
  token: any;
  id: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // verify login
    this.data = jwt_decode(localStorage.getItem('token'));
    this.token = localStorage.getItem('token');
    this.id = this.route.snapshot.params.id;
    // get news that needs to be edited
    this.authService.getSingleNews(this.id).subscribe(
      (res) => {
        // save the news to edit.
        this.news = res;
        // console.log(this.news);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }

  EditNews() {
    //console.log(this.news);
    // update the news
    this.authService.updateNews(this.id, this.news, this.token).subscribe(
      (res) => {
        // if success then navigate to newsList
        this.router.navigate(['/newsList']);
      },
      (err) => {
        // else display error.
        this.error = err.error;
      }
    );
  }
}
