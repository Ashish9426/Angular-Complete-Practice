import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router, private _toast:ToastrService) { }

  ngOnInit(): void {
  }

  logout(){
    this._router.navigate(["/login"])
    this._toast.success("Successfully Logout","Thanks",{timeOut:5000})
    
    }

}
