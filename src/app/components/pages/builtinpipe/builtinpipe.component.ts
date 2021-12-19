import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtinpipe',
  templateUrl: './builtinpipe.component.html',
  styleUrls: ['./builtinpipe.component.css']
})
export class BuiltinpipeComponent implements OnInit {
  employee:any
  
  constructor() { 
    this.employee = []
  }

  loadEmployee(){
    this.employee = [
      {"id":1, "name":"Ashish Mishra", "gender":1, "salary":25000, 'dob':new Date('1994-09-26')},
      {"id":2, "name":"Tarun", "gender":1, "salary":24000, 'dob':new Date('1994-09-26')},
      {"id":3, "name":"Abhishek", "gender":1, "salary":22000, 'dob':new Date('1993-10-10')},
      {"id":4, "name":"Vivek", "gender":1, "salary":26000, 'dob':new Date('1992-11-25')},
      {"id":5, "name":"Mukul", "gender":1, "salary":35000, 'dob':new Date('1990-10-24')},
      {"id":6, "name":"Shail", "gender":0, "salary":45000, 'dob':new Date('1995-08-16')},
      {"id":7, "name":"Raghav", "gender":1, "salary":55000, 'dob':new Date('1992-05-02')},
      {"id":8, "name":"Muskan", "gender":0, "salary":65000, 'dob':new Date('1996-09-27')},
      {"id":9, "name":"Soni", "gender":0, "salary":25000, 'dob':new Date('1994-08-21')},
      {"id":10, "name":"Anjali", "gender":0, "salary":75000, 'dob':new Date('1994-07-15')},
    ]
  }

  ngOnInit(): void {
  }

}
