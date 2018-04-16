import { OnInit, Component , Inject } from '@angular/core';

import { EmployeeService } from './services/employee/employee.service';
import { APP_PROVIDER } from './services/valueProvider/appProvider';
import { IAppProvider } from './services/valueProvider/IAppProvider';
import { LoginService } from './services/login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `<h1> 
  //       Root Component </h1>`,
  styleUrls: ['./app.component.css']
  // styles: [
  //    'background-color : red ' ]
})
export class AppComponent implements OnInit {
  title = '';
  constructor(private empService: EmployeeService,
  @Inject(APP_PROVIDER) private appConfig : IAppProvider,
  public loginService:LoginService) { }

  ngOnInit() {
    this.title = this.appConfig.AppName;
    this.empService.getEmployeeList();
  }

  addEmployee() {
    this.empService.addEmployee();
  }
}
