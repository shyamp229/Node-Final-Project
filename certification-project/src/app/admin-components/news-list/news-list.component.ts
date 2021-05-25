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
    // verifies login
    this.data = jwt_decode(localStorage.getItem('token'));
    this.token = localStorage.getItem('token');
    //console.log(this.data);
    this.displayData();
  }

  // displays data onto news list page.
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

  // removes news based on id
  deleteNews(id) {
    this.authService.deleteNews(id, this.token).subscribe(
      (res) => {
        alert('Deleted Successfully');
        // refreshes the webpage
        this.router.navigate(['/newsList']);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
  // navigates to editNews page
  editNews(id) {
    this.router.navigate(['/editNews/' + id]);
  }
}
