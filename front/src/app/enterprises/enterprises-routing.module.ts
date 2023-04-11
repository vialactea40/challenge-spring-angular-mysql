import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnterprisesComponent } from './enterprises/enterprises.component';
import { EnterprisesFormComponent } from './enterprises-form/enterprises-form.component';
import { EnterpriseResolver } from './guards/enterprise.resolver';


const routes: Routes = [
  { path: '', component: EnterprisesComponent },
  { path: 'new', component: EnterprisesFormComponent, resolve: {enterprise: EnterpriseResolver}},
  { path: 'edit/:id', component: EnterprisesFormComponent, resolve: {enterprise: EnterpriseResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterprisesRoutingModule { }
