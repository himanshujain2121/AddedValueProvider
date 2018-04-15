// core module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
// component
import { EmployeeComponent } from '../employee/employee.component';
import { DepartmentComponent } from '../department/department.component';
import { BooksComponent } from '../books/books.component';
import { OrderComponent } from '../order/order.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'login' ,component :LoginComponent},
      {path: 'employee' ,component :EmployeeComponent},
      {path: 'department' ,component :DepartmentComponent},
      {path: 'book' ,component :BooksComponent},
      {path: 'order' ,component :OrderComponent},
      {path: '' , redirectTo:'login',pathMatch:'full'},
      {path: '**' ,component :PagenotfoundComponent}
    ])
  ],
  declarations: []
})
export class RoutingModule { }
