// common Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// custom Module
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { PostsModule } from './posts/posts.module';
// component 
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { BooksComponent } from './books/books.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
// service
import { EmployeeService } from './services/employee/employee.service';
import { NewemployeeService } from './services/employee/newemployee.service';
import { LoginService } from './services/login/login.service';
// value Provider
import { APP_PROVIDER , AppConfig } from './services/valueProvider/appProvider';
import { VALUE_PROVIDER } from './services/valueProvider/valueProvider';
// Environment
import { environment } from '../environments/environment';
import { AuthGuard } from './services/guards/auth.guard';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    EmployeeListComponent,
    BooksComponent,
    BooksListComponent,
    OrderComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PostsModule,
    RoutingModule,
   
  ],
  providers: [
    // EmployeeService,
    { provide: EmployeeService, useClass: NewemployeeService },
    { provide: VALUE_PROVIDER, useValue: environment },
    { provide: APP_PROVIDER, useValue: AppConfig },
     LoginService,AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
