import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeContainerComponent } from './components/enigme-base/enigme-container/enigme-container.component';
import { EnigmeFiveComponent } from './components/enigme-five/enigme-five.component';
import { EnigmeFourComponent } from './components/enigme-four/enigme-four.component';
import { EnigmeListComponent } from './components/enigme-list/enigme-list.component';
import { EnigmeOneImageOneComponent } from './components/enigme-one/enigme-one-image-one/enigme-one-image-one.component';
import { EnigmeOneImageTwoComponent } from './components/enigme-one/enigme-one-image-two/enigme-one-image-two.component';
import { EnigmeOneComponent } from './components/enigme-one/enigme-one.component';
import { EnigmeTwoComponent } from './components/enigme-two/enigme-two.component';

const routes: Routes = [
  {
    path: '',
    component: EnigmeListComponent
  },
  {
    path: 'enigme',
    component: EnigmeContainerComponent,
    children: [
      {
        path: '1',
        component: EnigmeOneComponent,
        loadChildren: () => import('./components/enigme-one/enigme-one.module')
          .then(mod => mod.EnigmeOneModule)
      },
      {
        path: '2',
        component: EnigmeTwoComponent,
        loadChildren: () => import('./components/enigme-two/enigme-two.module')
          .then(mod => mod.EnigmeTwoModule)
      },
      {
        path: '3',
        component: EnigmeTwoComponent,
        loadChildren: () => import('./components/enigme-three/enigme-three.module')
          .then(mod => mod.EnigmeThreeModule)
      },
      {
        path: '4',
        component: EnigmeFourComponent,
        loadChildren: () => import('./components/enigme-four/enigme-four.module')
          .then(mod => mod.EnigmeFourModule)
      },
      {
        path: '5',
        component: EnigmeFiveComponent,
        loadChildren: () => import('./components/enigme-five/enigme-five.module')
          .then(mod => mod.EnigmeFiveModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppEnigmeRoutingModule { }
