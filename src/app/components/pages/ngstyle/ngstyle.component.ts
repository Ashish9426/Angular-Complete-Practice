import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  employee:any;

  style1={'color':'white','background':'green'}
  style2={'color':'red','background':'blue'}
  constructor() { 
    this.employee = [
      {"id":1, "name":"Ashish Mishra", "gender":1, "salary":25000},
      {"id":2, "name":"Tarun", "gender":1, "salary":24000},
      {"id":3, "name":"Abhishek", "gender":1, "salary":22000},
      {"id":4, "name":"Vivek", "gender":1, "salary":26000},
      {"id":5, "name":"Mukul", "gender":1, "salary":35000},
      {"id":6, "name":"Shail", "gender":0, "salary":45000},
      {"id":7, "name":"Raghav", "gender":1, "salary":55000},
      {"id":8, "name":"Muskan", "gender":0, "salary":65000},
      {"id":9, "name":"Soni", "gender":0, "salary":25000},
      {"id":10, "name":"Anjali", "gender":0, "salary":75000},
    ]
  }

  ngOnInit(): void {
  }

}
