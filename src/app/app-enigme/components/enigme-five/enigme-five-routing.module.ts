import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeFiveImageOneComponent } from './enigme-five-image-one/enigme-five-image-one.component';

const routes: Routes = [
  {
    path: '',
    component: EnigmeFiveImageOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnigmeFiveRoutingModule { }
