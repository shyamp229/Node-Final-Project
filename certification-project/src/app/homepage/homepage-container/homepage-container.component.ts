import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/news';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.css'],
})
export class HomepageContainerComponent implements OnInit {
  newsList: News[] = [];
  threeLatestNewsList: News[] = [];
  error = {};
  newsData: string = 'Click On news to get more information regarding news';
  newsTitle: string = 'Title';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getNewsList().subscribe(
      (data: any[]) => {
        this.newsList = data;
        console.log(this.newsList);
      },
      (err) => {
        this.error = err.error;
      }
    );
    this.authService.getThreeLatestNews().subscribe(
      (data: any[]) => {
        this.threeLatestNewsList = data;
        console.log(this.threeLatestNewsList)
      },
      (err) => {
        this.error = err.error;
      }
      
    )
  }
  showNewsData(data, title) {
    this.newsData = data;
    this.newsTitle = title;
  }
}
