import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { AuthoService } from 'src/app/authentication/autho.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata:FormGroup;
  errormessage:any;
  constructor(private _router:Router, private _toast:ToastrService, private _authoService:AuthoService) { 
    this.formdata=new FormGroup({
      "userid":new FormControl('', Validators.required),
      'password':new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formdata.value)
    let user=this.formdata.value;

    
    let history = localStorage.getItem("newUser")
    let data = JSON.parse(history)

    let name = data.fname
    let id=data.email;
    let pass = data.password;

    if(user.userid==id && user.password==pass){
      this._authoService.Authentication();
      this._router.navigate(["/dashboard"])
      this._toast.success("Welcome Mr. "+name,"message")
    }
    else{
      this.errormessage="Invalid login id or password !"
      this._toast.warning("Failed to SignIn","warning",{timeOut:5000})
    }
  }

}
