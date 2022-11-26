import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnigmeFiveRoutingModule } from './enigme-five-routing.module';
import { EnigmeFiveComponent } from './enigme-five.component';
import { EnigmeFiveImageOneComponent } from './enigme-five-image-one/enigme-five-image-one.component';
import { EnigmeBaseModule } from '../enigme-base/enigme-base.module';


@NgModule({
  declarations: [
    EnigmeFiveComponent,
    EnigmeFiveImageOneComponent
  ],
  imports: [
    CommonModule,
    EnigmeFiveRoutingModule,
    EnigmeBaseModule
  ]
})
export class EnigmeFiveModule { }
