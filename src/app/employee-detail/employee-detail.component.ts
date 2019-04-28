import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormArray } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeForm;

  get employeeFormArray() {
    return this.employeeForm.get('employeeFormArray') as FormArray;
  }

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {

    this.employeeForm = this.fb.group(
      {
        employeeFormArray: this.fb.array([])
      }
    )
  }

  addEmployee(){
    const formGroup = this.fb.group({
      name: [''],
      designation: [''],
      salary: []
    });

    this.employeeFormArray.push(formGroup);
  }

  removeEmployee(index: number){
    this.employeeService.removeEmployee(index);
    this.employeeFormArray.controls.splice(index, 1);
  }

  formSubmit(){
    this.employeeService.updateEmployee(this.employeeFormArray.value);
  }

}
