import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterprisesComponent } from './enterprises/enterprises.component';

const routes: Routes = [
  { path: '', component: EnterprisesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnterprisesRoutingModule { }
