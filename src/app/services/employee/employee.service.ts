import { Injectable } from '@angular/core';
import { Employee } from './employee';
 
@Injectable()
export class EmployeeService {
  empList: Employee[] = [];
  constructor() {
    console.log('This is employee service');
  }

  getEmployeeList() {
    this.empList = [
      { id: 1, name: 'Test1', email: 'abc@gmail.com', salary: 12000 },
      { id: 2, name: 'Test2', email: 'abc@gmail.com', salary: 24000 },
      { id: 3, name: 'Test3', email: 'abc@gmail.com', salary: 48000 },
      { id: 4, name: 'Test4', email: 'abc@gmail.com', salary: 120000 }
    ];

    return this.empList;
  }

  addEmployee() {
    let employee = { id: 5, name: 'Amit', email: 'abc@gmail.com', salary: 120000 };
    this.empList.push(employee);
  }
}
