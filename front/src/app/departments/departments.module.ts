import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsFormComponent } from './departments-form/departments-form.component';


@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentsFormComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    SharedModule
  ]
})
export class DepartmentsModule { }
