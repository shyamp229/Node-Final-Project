import { Component, OnInit } from '@angular/core';


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

    //this.employee = {
      // employeeId:2,
       // firstName:'John',
       // LastName:'Smith',
       // salary:10000,
       // DOB:new Date('11/02/1983'),
       //email:'john@abc.com'

    //}



    
  }

  EditEmp(){
      this.showEdit = true;
  }

  UpdateEmp(){
    this.showEdit=false;
   
  }

}