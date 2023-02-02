import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'exercices',
    loadChildren: () => import('./modules/exercices/exercices.module').then( m => m.ExercicesPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./modules/activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
