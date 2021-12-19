import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faVenusMars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  faUser=faUser;
  faVenusMars=faVenusMars;
  faEnvelopeSquare=faEnvelopeSquare;
  faMobileAlt=faMobileAlt;
  faBuilding=faBuilding;
  faUserLock=faUserLock;

  formdata={
    "fname":'',
    "lname":'',
    'email':'',
    'mobile':'',
    'department':'',
    'password':'',
    'confirmpassword':'',
    'address':''

  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(data:NgForm){
    console.log(data)
  }

}
