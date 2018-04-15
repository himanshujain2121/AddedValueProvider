import { Component, OnInit, DoCheck } from '@angular/core';

import { Employee } from '../services/employee/employee';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, DoCheck {
  title: string = 'Employee List';
  visible: boolean = false;
  role: string = 'User';
  selectedEmployee: Employee;
  employee: Employee[] = [];
  // employeeSevice: EmployeeService;
  constructor(private empService: EmployeeService) {
    // this.employeeSevice = empService;
  }

  ngOnInit() {
    this.loadEmployee();
  }

  ngDoCheck(): void {
    console.log('do check is called');
  }

  loadEmployee() {
    this.employee = this.empService.getEmployeeList();
    // this.employee = [
    //   { id: 1, name: 'Test1', email: 'abc@gmail.com', salary: 12000 },
    //   { id: 2, name: 'Test2', email: 'abc@gmail.com', salary: 24000 },
    //   { id: 3, name: 'Test3', email: 'abc@gmail.com', salary: 48000 },
    //   { id: 4, name: 'Test4', email: 'abc@gmail.com', salary: 120000 }
    // ];
  }

  toggle(): void {
    this.visible = !this.visible;
    this.title = "New Employee List";
  }

  receiveFromParent(emp: Employee) {
    this.selectedEmployee = emp;
  }
}
