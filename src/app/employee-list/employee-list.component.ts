import { Component, OnInit } from '@angular/core';

import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators } from '@angular/forms';

import { filter, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 employees: Employee[];

  searchForm;
  showEmployeeClicked: boolean;
  btnText: string

  get query(){
    return this.searchForm.controls.query.value as string;
  }

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.btnText = "Show";
    this.showEmployeeClicked = false;
    this.searchForm = this.fb.group({
      query : ['', Validators.required]
    });

    this.employees = this.employeeService.getEmployees();

    this.employeeService.employee.subscribe((employees: Employee[]) =>  this.employees = employees);
  }

  showEmployee(){
    this.showEmployeeClicked = !this.showEmployeeClicked;
    this.btnText = this.btnText === "Hide"? "Show" : "Hide";
  }


}
