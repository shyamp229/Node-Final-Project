import { Observable } from 'rxjs';
import { News } from './../models/news';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import{HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http:HttpClient) { }

getNews():Observable<any>
{
  let url= `https://hn.algolia.com/api/v1/search_by_date?query=sports&tags=story`;
  return this.http.get(url);

  
 // return ( this.http.get('https://hn.algolia.com/api/v1/search_by_date?query=sports&tags=story').map((res:Response)=>res.json()));
  
  
  

}
}