import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnigmeFourRoutingModule } from './enigme-four-routing.module';
import { EnigmeFourImageOneComponent } from './enigme-four-image-one/enigme-four-image-one.component';
import { EnigmeBaseModule } from '../enigme-base/enigme-base.module';
import { EnigmeFourComponent } from './enigme-four.component';


@NgModule({
  declarations: [
    EnigmeFourComponent,
    EnigmeFourImageOneComponent
  ],
  imports: [
    CommonModule,
    EnigmeFourRoutingModule,
    EnigmeBaseModule
  ]
})
export class EnigmeFourModule { }
