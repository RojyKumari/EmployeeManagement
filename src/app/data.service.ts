import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { Employee } from './model/employee';

@Injectable({
    providedIn: 'root'
  })
export class DataService{

constructor(private http: HttpClient){
}

put(body: any) {

 this.http.put('https://employee-management-83240.firebaseio.com/employees.json', body).subscribe(
   (res) => console.log(res)
 );
}

get() {

  return this.http.get<Employee[]>('https://employee-management-83240.firebaseio.com/employees.json');
 }
}
