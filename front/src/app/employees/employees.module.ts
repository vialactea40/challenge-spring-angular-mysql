import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesFormComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
