import { Component, OnInit } from '@angular/core';

import {News} from '../news';


@Component({
  selector: 'app-employee',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {


  editIcon:any;
  showEdit:boolean=false;
  
  constructor() { }

  ngOnInit() {
    this.editIcon='assets/edit-512.png'
/*
    title: string,
 
    description : string,
  
    url : string,
  
    urlToImage:number,
  
    publishedAt :Date,  
  
    timestamp :string

*/

    
  }

  EditEmp(){
      this.showEdit = true;
  }

  UpdateEmp(){
    this.showEdit=false;
   
  }

}