import { Component, OnInit } from '@angular/core';

import {department} from './department';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  department: department[] = [
    { empid: 100, empname: 'emp1', empemail: 'abc@gmail.com', empsalary: 10000 },
    { empid: 101, empname: 'emp2', empemail: 'abc@gmail.com', empsalary: 20000 },
    { empid: 102, empname: 'emp3', empemail: 'abc@gmail.com', empsalary: 30000 },
    { empid: 103, empname: 'emp4', empemail: 'abc@gmail.com', empsalary: 40000 }
  ]
  constructor() { }

  ngOnInit() {
  }

}
