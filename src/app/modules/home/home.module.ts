import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SettingsComponent } from './components/settings/settings.component';
import { ItemListComponent } from 'src/app/shared/components/UI/item-list/item-list.component';
import { ModalComponent } from 'src/app/shared/components/UI/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SettingsComponent, ItemListComponent, ModalComponent]
})
export class HomePageModule {}
