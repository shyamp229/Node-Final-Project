import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
@Component({
  selector: 'app-homepage-container',
  templateUrl: './homepage-container.component.html',
  styleUrls: ['./homepage-container.component.css'],
})
export class HomepageContainerComponent implements OnInit {
  newsList = [];
  error = {};
  newsData: string = 'Click On news to get more information regarding news';
  newsTitle: string = 'Title';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getThreeLatestNews().subscribe(
      (data: any[]) => {
        this.newsList = data;
        console.log(this.newsList);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
  showNewsData(data, title) {
    this.newsData = data;
    this.newsTitle = title;
  }
  getTitle(index) {
    console.log(this.newsList[index]);
    if (this.newsList[index] == undefined) {
      return 'Title Here';
    } else {
      return this.newsList[index].title;
    }
  }
}
