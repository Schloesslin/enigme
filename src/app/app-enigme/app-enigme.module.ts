import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppEnigmeComponent } from './app-enigme.component';
import { AppEnigmeRoutingModule } from './app-enigme-routing.module';
import { EnigmeListItemComponent } from './components/enigme-list/enigme-list-item/enigme-list-item.component';
import { EnigmeListComponent } from './components/enigme-list/enigme-list.component';
import { EnigmeListItemImageComponent } from './components/enigme-list/enigme-list-item-image/enigme-list-item-image.component';

@NgModule({
  declarations: [
    AppEnigmeComponent,
    EnigmeListItemComponent,
    EnigmeListComponent,
    EnigmeListItemImageComponent,
  ],
  imports: [
    CommonModule,
    AppEnigmeRoutingModule
  ],
  exports: [
    AppEnigmeComponent
  ]
})
export class AppEnigmeModule { }
