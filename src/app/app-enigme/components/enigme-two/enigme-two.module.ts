import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnigmeTwoRoutingModule } from './enigme-two-routing.module';
import { EnigmeTwoImageOneComponent } from './enigme-two-image-one/enigme-two-image-one.component';
import { EnigmeBaseModule } from '../enigme-base/enigme-base.module';
import { EnigmeTwoComponent } from './enigme-two.component';


@NgModule({
  declarations: [
    EnigmeTwoComponent,
    EnigmeTwoImageOneComponent
  ],
  imports: [
    CommonModule,
    EnigmeTwoRoutingModule,
    EnigmeBaseModule
  ]
})
export class EnigmeTwoModule { }
