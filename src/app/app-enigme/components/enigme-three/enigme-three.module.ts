import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnigmeThreeRoutingModule } from './enigme-three-routing.module';
import { EnigmeThreeImageOneComponent } from './enigme-three-image-one/enigme-three-image-one.component';
import { EnigmeBaseModule } from '../enigme-base/enigme-base.module';
import { EnigmeThreeComponent } from './enigme-three.component';


@NgModule({
  declarations: [
    EnigmeThreeComponent,
    EnigmeThreeImageOneComponent
  ],
  imports: [
    CommonModule,
    EnigmeThreeRoutingModule,
    EnigmeBaseModule
  ]
})
export class EnigmeThreeModule { }
