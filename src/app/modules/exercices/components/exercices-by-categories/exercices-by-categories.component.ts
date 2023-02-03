import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExercicesDetailsComponent } from '../exercices-details/exercices-details.component';

@Component({
  selector: 'app-exercices-by-categories',
  templateUrl: './exercices-by-categories.component.html',
  styleUrls: ['./exercices-by-categories.component.scss'],
})
export class ExercicesByCategoriesComponent implements OnInit, OnDestroy {

  @Input() data: any;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.data);
  }

  async showExerciceDetails(id: number){
    const modal = await this.modalCtrl.create({
      component: ExercicesDetailsComponent,
      componentProps: {
        "id": id
      }
    });
    modal.present();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("destroyed");
  }

}
