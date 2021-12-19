import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments:any;
  
  constructor() { 
    this.departments = [
      {"id":1, "name":"IT"},
      {"id":2, "name":"ACCOUNT"},
      {"id":3, "name":"SALE"},
      {"id":4, "name":"HR"},
      {"id":5, "name":"ADMIN"},
    ]
  }

  ngOnInit(): void {
  }

}
