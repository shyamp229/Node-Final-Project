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
  // backend api urls
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

  // calling register method in backend
  registerUser(data, token): Observable<any> {
    return this.httpClient.post(this.api + '/register', data, { headers: { authorization: token } });
  }
  // logs user in 
  loginUser(data): Observable<any> {
    return this.httpClient.post(this.api + '/login', data, headeroptions);
  }

  // get user by id
  getSingleUser(id, token): Observable<any> {
    return this.httpClient.get(`${this.api}/${id}`, { headers: { authorization: token } })
  }


  // post news 
  addNews(data, token): Observable<any> {
    return this.httpClient.post(this.newsApi + '/addNews', data, { headers: { authorization: token } });
  }
  // get news
  getNewsList(): Observable<any> {
    return this.httpClient.get(this.newsApi + '/allNews');
  }

  // delete news by id
  deleteNews(id, token): Observable<any> {
    return this.httpClient.delete(
      this.newsApi + '/deleteNews/' + id,
      { headers: { authorization: token } }
    );
  }

  // get news by id
  getSingleNews(id): Observable<any> {
    return this.httpClient.get(
      this.newsApi + '/getSingleNews/' + id,
      headeroptions
    );
  }


  // update news by id 
  updateNews(id, data, token): Observable<any> {
    return this.httpClient.put(
      this.newsApi + '/updateNews/' + id,
      data,
      { headers: { authorization: token } }
    );
  }

  // get latest 3 news articles.
  getThreeLatestNews(): Observable<any> {
    return this.httpClient.get(this.newsApi + '/threeLatestNews', headeroptions);
  }
}
