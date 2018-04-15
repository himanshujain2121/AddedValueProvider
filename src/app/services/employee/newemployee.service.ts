import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Injectable()
export class NewemployeeService extends EmployeeService {
  empList: Employee[] = [];

  constructor() {
    super();
  }

  getEmployeeList() {
    this.empList = [
      { id: 1, name: 'Test1', email: 'abc@gmail.com', salary: 12000 },
      { id: 2, name: 'Test2', email: 'abc@gmail.com', salary: 24000 },
      { id: 3, name: 'Test3', email: 'abc@gmail.com', salary: 48000 },
      { id: 4, name: 'Test4', email: 'abc@gmail.com', salary: 120000 },
      { id: 5, name: 'Test4', email: 'abc@gmail.com', salary: 160000 }
    ];

    return this.empList;
  }
}
