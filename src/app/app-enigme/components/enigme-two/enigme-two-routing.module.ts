import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeTwoImageOneComponent } from './enigme-two-image-one/enigme-two-image-one.component';

const routes: Routes = [
  {
    path: '',
    component: EnigmeTwoImageOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnigmeTwoRoutingModule { }
