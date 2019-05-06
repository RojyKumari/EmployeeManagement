import { Component, OnInit } from '@angular/core';

import { Employee } from '../model/employee';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators } from '@angular/forms';

import { filter, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private employeeService: EmployeeService, private fb: FormBuilder, private route: ActivatedRoute) {
    console.log('employee-list component instantiated');
  }

  ngOnInit() {

    this.showEmployeeClicked = false;
    this.searchForm = this.fb.group({
      query : ['', Validators.required]
    });

    this.route.data.subscribe((e)=>{
      this.employees = e['employees'] as Employee[]
    });

    this.employeeService.employee.subscribe((employees: Employee[]) =>  this.employees = employees);
  }




}
