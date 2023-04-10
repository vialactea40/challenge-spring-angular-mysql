import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterprisesRoutingModule } from './enterprises-routing.module';
import { EnterprisesComponent } from './enterprises/enterprises.component';


@NgModule({
  declarations: [
    EnterprisesComponent
  ],
  imports: [
    CommonModule,
    EnterprisesRoutingModule
  ]
})
export class EnterprisesModule { }
