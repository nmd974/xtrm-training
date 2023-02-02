import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercicesListComponent } from './components/exercices-list/exercices-list.component';

import { ExercicesPage } from './exercices.page';

const routes: Routes = [
  {
    path: '',
    component: ExercicesPage,
    children: [
      {
        path: 'list',
        component: ExercicesListComponent
      },
      {
        path: '',
        redirectTo: '/exercices/list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/exercices/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicesPageRoutingModule {}
