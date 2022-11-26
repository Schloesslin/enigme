import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeOneImageOneComponent } from './enigme-one-image-one/enigme-one-image-one.component';
import { EnigmeOneImageTwoComponent } from './enigme-one-image-two/enigme-one-image-two.component';

const routes: Routes = [
  {
    path: '',
    component: EnigmeOneImageOneComponent,
  },
  {
    path: '2',
    component: EnigmeOneImageTwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnigmeOneRoutingModule { }
