import { SportsService } from './../../services/sports.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent {
  news = {};
  constructor(private SportsService: SportsService) {
    this.SportsService.getNews().subscribe((data) => {
      this.news = data
    });
  }

  // ngOnInit(): void {}
}
