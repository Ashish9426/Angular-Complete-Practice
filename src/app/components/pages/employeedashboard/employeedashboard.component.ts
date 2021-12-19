import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms'
import {ApiService } from 'src/app/shared/api.service';
import { EmployeeModel } from './employee-dashboard.model';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {

  faTrash=faTrash;
  faEdit=faEdit;

  formValue !: FormGroup;
  employeeModelobj : EmployeeModel = new EmployeeModel();
  employeeData !:any;

  showAdd! : boolean;
  showupdate! : boolean;

  constructor(private api : ApiService) { 
      
    }

  ngOnInit(): void {

    this.formValue = new FormGroup({
      "firstName":new FormControl('', Validators.required),
      "lastName":new FormControl('', Validators.required),
      "email":new FormControl('', Validators.required),
      "mobile":new FormControl('', Validators.required),
      "salary":new FormControl('',Validators.required),
 
    })
    // this.formValue = this.formbuilder.group({
    //   firstName : [''],
    //   lastName : [''],
    //   email : [''],
    //   mobile : [''],
    //   salary : ['']

    // }) 
    this.getAllEmployee();
  }
  clickAddEmployee(){
    this.formValue.reset();
    
    this.showAdd = true;
    this.showupdate = false;
  }

  postEmployeeDetails (){
    this.employeeModelobj.firstName = this.formValue.value.firstName;
    this.employeeModelobj.lastName = this.formValue.value.lastName;
    this.employeeModelobj.email = this.formValue.value.email;
    this.employeeModelobj.mobile = this.formValue.value.mobile;
    this.employeeModelobj.salary = this.formValue.value.salary;

    this.api.postEmployee(this.employeeModelobj).subscribe(res=>{
      console.log(res);
      alert("Employee Added Successfully")
      let ref = document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Something Went Wrong");
    })
  }

  getAllEmployee(){
    this.api.getEmployee().subscribe(res=>{
      this.employeeData=res;

    })
  }
  deleteEmployee(row : any){
    this.api.deleteEmployee(row.id).subscribe(res=>{
      alert("Employee Deleted")
      this.getAllEmployee();
    })
  }
  onEdit(row : any){
    this.showAdd = false;
    this.showupdate = true;

    this.employeeModelobj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName)
    this.formValue.controls['lastName'].setValue(row.lastName)
    this.formValue.controls['email'].setValue(row.email)
    this.formValue.controls['mobile'].setValue(row.mobile)
    this.formValue.controls['salary'].setValue(row.salary)
  }
  updateEmployeeDetails(){
    this.employeeModelobj.firstName = this.formValue.value.firstName;
    this.employeeModelobj.lastName = this.formValue.value.lastName;
    this.employeeModelobj.email = this.formValue.value.email;
    this.employeeModelobj.mobile = this.formValue.value.mobile;
    this.employeeModelobj.salary = this.formValue.value.salary;

    console.log(this.employeeModelobj)

    this.api.updateEmployee(this.employeeModelobj,this.employeeModelobj.id).subscribe((res)=>{
      console.log(res)
      alert("updated Successfully");
      let ref = document.getElementById("cancel")
      ref?.click(); 
      this.formValue.reset();
      this.getAllEmployee();
    })
  }
}