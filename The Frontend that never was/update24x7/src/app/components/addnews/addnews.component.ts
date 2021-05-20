import { Component, OnInit } from '@angular/core';
import {News} from '../news';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


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