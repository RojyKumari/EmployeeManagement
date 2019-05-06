import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Employee } from '../model/employee';
import { Injectable } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Injectable()
export class EmployeeResolver implements Resolve<Observable<Employee[]>> {

  constructor(private employeeService: EmployeeService){}

  resolve(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Observable<Employee[]> | Promise<Employee[]> | any {
  console.log('resolving data...');
    return this.employeeService.getEmployees();
  }
}
