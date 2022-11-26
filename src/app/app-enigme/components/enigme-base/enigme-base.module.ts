import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnigmeBaseComponent } from './enigme-base.component';
import { EnigmeBaseDescriptionComponent } from './enigme-base-description/enigme-base-description.component';
import { EnigmeBaseTitleHomeComponent } from './enigme-base-title-home/enigme-base-title-home.component';
import { EnigmeBaseTitleComponent } from './enigme-base-title/enigme-base-title.component';
import { RouterModule } from '@angular/router';
import { EnigmeContainerComponent } from './enigme-container/enigme-container.component';
import { EnigmeBaseImageComponent } from './enigme-base-image/enigme-base-image.component';



@NgModule({
  declarations: [
    EnigmeBaseComponent,
    EnigmeBaseDescriptionComponent,
    EnigmeBaseTitleHomeComponent,
    EnigmeBaseTitleComponent,
    EnigmeContainerComponent,
    EnigmeBaseImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EnigmeBaseComponent,
    EnigmeBaseDescriptionComponent,
    EnigmeBaseTitleHomeComponent,
    EnigmeBaseTitleComponent,
    EnigmeBaseImageComponent
  ]
})
export class EnigmeBaseModule { }
