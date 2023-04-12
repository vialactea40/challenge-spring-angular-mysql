import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeResolver } from './guards/employee.resolver';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';

const routes: Routes = [

  { path: '', component: EmployeesComponent },
  { path: 'new', component: EmployeesFormComponent, resolve: {employee: EmployeeResolver}},
  { path: 'edit/:id', component: EmployeesFormComponent, resolve: {employee: EmployeeResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
