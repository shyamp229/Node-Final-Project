import { HttpClient } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';

const url = 'http://localhost:3000/api/queries';
@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private httpClient: HttpClient) { }

  // posts message from customer side of application
  addQuery(query: Query): any {
    return this.httpClient.post(`${url}/`, query);
  }
}
