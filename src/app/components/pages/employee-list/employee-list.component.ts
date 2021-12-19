import { Component, OnInit } from '@angular/core';
import { EmployeeList } from './employeerecords'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employess = EmployeeList;

  constructor(private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(param=>{
      const id=param["id"];
     // console.log(id)
      if(id!=undefined)
      this.Employess=EmployeeList.filter(e=>e.deptid==id)
    })
  }

}
