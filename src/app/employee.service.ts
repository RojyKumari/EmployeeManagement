import { Injectable } from "@angular/core";
import { Employee } from "./model/employee";
import { Subject } from "rxjs";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  employees: Employee[] = [];

  employee = new Subject<Employee[]>();

  constructor(private dataService: DataService) {}

  private informOthers() {
    this.employee.next(this.employees);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    this.informOthers();
  }

  getEmployees() {
    if (this.employees.length) {
      return this.employees;
    } else {
      this.dataService.get().subscribe(e => {
        this.employees = e;
        this.informOthers();
      });
    }
  }

  removeEmployee(index: number) {
    this.employees.splice(index, 1);
    this.informOthers();
  }

  updateEmployee(employees: Employee[]) {
    this.employees = this.employees.concat(employees);
    this.informOthers();
    this.dataService.put(this.employees);
  }
}
