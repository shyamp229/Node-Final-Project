import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  error = {};
  newsList = [];
  data: any = {};
  token: any;
  /*public demoData = [
    {
      title: 'therichpost',
      description: 'therichpost@gmail.com',
      url: 'therichpost.com',
    },
    {
      title: 'therichpost',
      description: 'therichpost@gmail.com',
      url: 'therichpost.com',
    },
    {
      title: 'therichpost',
      description: 'therichpost@gmail.com',
      url: 'therichpost.com',
    },
    {
      title: 'therichpost',
      description: 'therichpost@gmail.com',
      url: 'therichpost.com',
    },
  ];*/

  popoverTitle: string = 'Delete News';
  popoverMessage: string = 'Are you sure do you want to delete';
  cancelClicked: boolean = false;
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.data = jwt_decode(localStorage.getItem('token'));
    this.token = localStorage.getItem('token');
    //console.log(this.data);
    this.displayData();
  }

  displayData() {
    this.authService.getNewsList().subscribe(
      (data: any[]) => {
        this.newsList = data;
      },
      (err) => {
        this.error = err.error;
      }
    );
    if (this.newsList.length > 0) {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
      };
    }
  }
  deleteNews(id) {
    this.authService.deleteNews(id, this.token).subscribe(
      (res) => {
        alert('Deleted Successfully');
        this.router.navigate(['/newsList']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
  editNews(id) {
    this.router.navigate(['/editNews/' + id]);
  }
}
