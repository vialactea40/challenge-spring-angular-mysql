import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentsFormComponent } from './departments-form/departments-form.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentResolver } from './guards/department.resolver';

const routes: Routes = [
  { path: '', component: DepartmentsComponent },
  { path: 'new', component: DepartmentsFormComponent, resolve: {department: DepartmentResolver}},
  { path: 'edit/:id', component: DepartmentsFormComponent, resolve: {department: DepartmentResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
