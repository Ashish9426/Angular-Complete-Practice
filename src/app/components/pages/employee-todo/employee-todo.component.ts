import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-employee-todo',
  templateUrl: './employee-todo.component.html',
  styleUrls: ['./employee-todo.component.css']
})
export class EmployeeTODOComponent implements OnInit {

  faTrash=faTrash;
  faEdit=faEdit;

  Employees:[]|any;
  formdata:FormGroup
  btnText="Submit"
  id:any
  txtFilter:any;

  constructor() { 
    
    this.formdata=new FormGroup({
      "id":new FormControl(''),
      "name":new FormControl('',Validators.compose([Validators.required, Validators.minLength(3)])),
      "dept":new FormControl('',Validators.required),
      "gender":new FormControl('', Validators.required)
    })

    if(localStorage.getItem("employees")==null)
    {
    this.Employees=[
      {"id":1,"name":"Sumit","dept":"IT","gender":"MALE"}
    ]
    localStorage.setItem("employees",JSON.stringify(this.Employees))
    }
    else{
      let data:any;
      data=localStorage.getItem("employees")
      this.Employees=JSON.parse(data)
      // console.log("=>",this.Employees);
    }
  }

  ngOnInit(): void {
  }

  submit(){
    console.log("look ",this.formdata.value)

    //  let emp=Object.assign({},this.formdata.value);
    let emp={...this.formdata.value}
    console.log("look2 ",emp)
    // let id=this.Employees.length+1;
    // let body= {
    //   "id":id,
    //   "name":this.formdata.controls[''].value,
    //   "dept":"IT",
    //   "gender":"MALE"}
    if(emp.id=='')
    {
      emp["id"]=this.Employees.length + 1
      // console.log(emp,this.Employees.length,this.Employees);
      this.Employees.push(emp)
      // this.formdata.reset()
      this.formdata.controls['dept'].setValue('');
      this.formdata.controls['gender'].setValue('');
      localStorage.setItem("employees",JSON.stringify(this.Employees))
    }
    else{
      this.Employees.splice(emp.id-1,1,emp)
      localStorage.setItem("employees",JSON.stringify(this.Employees))
      this.btnText="Submit"
    }
    // this.formdata.reset()
    
    }

   
    DeleteEmployee(id:number){
      event?.preventDefault()
      console.log(id,this.Employees)
      let index=this.Employees.findIndex(x=>x.id==id);
      this.Employees.splice(index,1)
      // this.Employees.splice(id-1,1)
      console.log(id)
      localStorage.setItem("employees",JSON.stringify(this.Employees))
    }


    EditEmployee(emp:any){
      event?.preventDefault()
      this.formdata.setValue({...emp})
      this.btnText="Update"
    }
} 
