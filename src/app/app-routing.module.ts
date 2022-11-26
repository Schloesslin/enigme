import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppEnigmeComponent } from './app-enigme/app-enigme.component';

const routes: Routes = [
  {
    path: '',
    component: AppEnigmeComponent,
    loadChildren: () => import('./app-enigme/app-enigme.module')
          .then(mod => mod.AppEnigmeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
