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
  api = 'http://localhost:3000/api/users';
  newsApi = 'http://localhost:3000/api/news';
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    // console.log('hello');
  }

  getLoginStatus() {
    this.data = jwt_decode(localStorage.getItem('token'));
    // console.log(this.data);
    if (this.data == null) {
      return false;
    } else {
      return true;
    }
  }

  registerUser(data, token): Observable<any> {
    return this.httpClient.post(this.api + '/register', data, { headers: { authorization: token } });
  }
  loginUser(data): Observable<any> {
    return this.httpClient.post(this.api + '/login', data, headeroptions);
  }

  getSingleUser(id, token): Observable<any> {
    return this.httpClient.get(`${this.api}/${id}`, { headers: { authorization: token } })
  }


  addNews(data, token): Observable<any> {
    return this.httpClient.post(this.newsApi + '/addNews', data, { headers: { authorization: token } });
  }
  getNewsList(): Observable<any> {
    return this.httpClient.get(this.newsApi + '/allNews');
  }
  deleteNews(id, token): Observable<any> {
    return this.httpClient.delete(
      this.newsApi + '/deleteNews/' + id,
      { headers: { authorization: token } }
    );
  }
  getSingleNews(id): Observable<any> {
    return this.httpClient.get(
      this.newsApi + '/getSingleNews/' + id,
      headeroptions
    );
  }

  updateNews(id, data, token): Observable<any> {
    return this.httpClient.put(
      this.newsApi + '/updateNews/' + id,
      data,
      { headers: { authorization: token } }
    );
  }
  getThreeLatestNews(): Observable<any> {
    return this.httpClient.get(this.newsApi + '/threeLatestNews', headeroptions);
  }
}
