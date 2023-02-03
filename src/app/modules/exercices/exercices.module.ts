import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicesPageRoutingModule } from './exercices-routing.module';

import { ExercicesPage } from './exercices.page';
import { ExercicesListComponent } from './components/exercices-list/exercices-list.component';
import { ExercicesDetailsComponent } from './components/exercices-details/exercices-details.component';
import { ExercicesByCategoriesComponent } from './components/exercices-by-categories/exercices-by-categories.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicesPageRoutingModule
  ],
  declarations: [ExercicesPage, ExercicesListComponent, ExercicesDetailsComponent, ExercicesByCategoriesComponent]
})
export class ExercicesPageModule {}
