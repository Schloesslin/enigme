import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnigmeOneRoutingModule } from './enigme-one-routing.module';
import { EnigmeOneImageOneComponent } from './enigme-one-image-one/enigme-one-image-one.component';
import { EnigmeOneImageTwoComponent } from './enigme-one-image-two/enigme-one-image-two.component';
import { EnigmeBaseModule } from '../enigme-base/enigme-base.module';
import { EnigmeOneComponent } from './enigme-one.component';


@NgModule({
  declarations: [
    EnigmeOneComponent,
    EnigmeOneImageOneComponent,
    EnigmeOneImageTwoComponent
  ],
  imports: [
    CommonModule,
    EnigmeOneRoutingModule,
    EnigmeBaseModule
  ]
})
export class EnigmeOneModule { }
