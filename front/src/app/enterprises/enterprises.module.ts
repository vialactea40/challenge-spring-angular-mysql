import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { EnterprisesRoutingModule } from './enterprises-routing.module';
import { EnterprisesComponent } from './enterprises/enterprises.component';


@NgModule({
  declarations: [
    EnterprisesComponent
  ],
  imports: [
    CommonModule,
    EnterprisesRoutingModule,
    SharedModule
  ]
})
export class EnterprisesModule { }
