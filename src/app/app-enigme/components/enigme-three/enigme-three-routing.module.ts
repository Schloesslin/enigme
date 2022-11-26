import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeThreeImageOneComponent } from './enigme-three-image-one/enigme-three-image-one.component';

const routes: Routes = [
  {
    path: '',
    component: EnigmeThreeImageOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnigmeThreeRoutingModule { }
