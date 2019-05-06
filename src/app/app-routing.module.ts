import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeResolver } from './resolver/employee.resolver';

const routes: Routes = [
  {path: 'employee-list', component: EmployeeListComponent, resolve:{
    employees: EmployeeResolver
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EmployeeResolver]
})
export class AppRoutingModule { }
