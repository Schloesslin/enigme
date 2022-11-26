import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeFourImageOneComponent } from './enigme-four-image-one/enigme-four-image-one.component';

const routes: Routes = [
  {
    path: '',
    component: EnigmeFourImageOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnigmeFourRoutingModule { }
