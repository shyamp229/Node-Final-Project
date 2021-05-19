import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
const headeroptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  data: any = {};
  api = '/api/users/';
  newsApi = '/api/news/';
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    console.log('hello');
  }
  getLoginStatus() {
    this.data = localStorage.getItem('jwtToken');
    console.log(this.data);
    if (this.data == null) {
      return false;
    } else {
      return true;
    }
  }

  registerUser(data): Observable<any> {
    return this.httpClient.post(this.api + 'register', data, headeroptions);
  }
  loginUser(data): Observable<any> {
    return this.httpClient.post(this.api + 'login', data, headeroptions);
  }
  addNews(data): Observable<any> {
    return this.httpClient.post(this.newsApi + 'addNews', data, headeroptions);
  }
  getNewsList(): Observable<any> {
    return this.httpClient.get(this.newsApi + 'allNews', headeroptions);
  }
  deleteNews(id): Observable<any> {
    return this.httpClient.delete(
      this.newsApi + 'deleteNews/' + id,
      headeroptions
    );
  }
  getSingleNews(id): Observable<any> {
    return this.httpClient.get(
      this.newsApi + 'getSingleNews/' + id,
      headeroptions
    );
  }

  updateNews(id, data): Observable<any> {
    return this.httpClient.put(
      this.newsApi + 'updateNews/' + id,
      data,
      headeroptions
    );
  }
  getThreeLatestNews(): Observable<any> {
    return this.httpClient.get(this.newsApi + 'threeLatestNews', headeroptions);
  }
}
