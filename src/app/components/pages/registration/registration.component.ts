import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import {Router} from '@angular/router'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  faUser=faUser;
  faVenusMars=faVenusMars;
  faEnvelopeSquare=faEnvelopeSquare;
  faMobileAlt=faMobileAlt;
  faBuilding=faBuilding;
  faUserLock=faUserLock;

  formdata:FormGroup;
  Data:[]|any;

  constructor(private _toast:ToastrService, private _router:Router) { 
    this.formdata = new FormGroup({
      "fname":new FormControl('', Validators.required),
      "lname":new FormControl('', Validators.required),
      "age":new FormControl('', Validators.required),
      "gender":new FormControl('', Validators.required),
      "email":new FormControl('', Validators.required),
      "mobile":new FormControl('', Validators.required),
      "department":new FormControl('',Validators.required),
      "password":new FormControl('', Validators.required),
      "cpassword":new FormControl('', Validators.required),
      "address":new FormControl('', Validators.required),  
    },  { validators: this.checkPasswords })
  }

  ngOnInit(): void {
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('cpassword').value
    return pass === confirmPass ? null : { notSame: true }
  }

  submit(){
    console.log(this.formdata.value)
    let data = this.formdata.value;   
    this.Data = data

    localStorage.setItem("newUser", JSON.stringify(this.Data))
    // this._toast.success('Thanks', 'Successfully Registered!');
    this._toast.info("Successfully Registered","Thanks",{timeOut:5000})
    this._router.navigate(["/login"])
  }

}
