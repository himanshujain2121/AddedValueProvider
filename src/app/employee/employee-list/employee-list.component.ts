import {
  Component, OnInit,
  Input, Output, EventEmitter, OnChanges, SimpleChanges,
  OnDestroy
} from '@angular/core';
import { Employee } from '../../services/employee/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() employeeList: Employee[];
  @Input() title: string;
  @Output() selectedEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  ngOnInit() {
  }

  selectEmployee(emp: Employee) {
    this.selectedEmployee.emit(emp);
  }

  ngOnDestroy(): void {
    alert('Do you really want to destroy emp list');
  }
}
