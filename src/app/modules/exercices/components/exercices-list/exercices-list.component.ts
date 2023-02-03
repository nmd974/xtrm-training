import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ExercicesByCategoriesComponent } from '../exercices-by-categories/exercices-by-categories.component';
import { ExercicesDetailsComponent } from '../exercices-details/exercices-details.component';

@Component({
  selector: 'app-exercices-list',
  templateUrl: './exercices-list.component.html',
  styleUrls: ['./exercices-list.component.scss'],
})
export class ExercicesListComponent implements OnInit {
  data: any = [
    {
      id: 1,
      label: "Cardio",
      data: [
        {
          id: 1,
          label: "Vélo elliptique",
          image: "https://picsum.photos/100"
        },
        {
          id: 2,
          label: "Tapis de course",
          image: "https://picsum.photos/100"
        },
        {
          id: 3,
          label: "Escaliers",
          image: "https://picsum.photos/100"
        },
        {
          id: 4,
          label: "Vélo elliptique 2",
          image: "https://picsum.photos/100"
        },
      ]
    },
    {
      id: 2,
      label: "Musculation",
      data: [
        {
          id: 1,
          label: "Biceps",
          image: "https://picsum.photos/100"
        },
        {
          id: 2,
          label: "Triceps",
          image: "https://picsum.photos/100"
        },
        {
          id: 3,
          label: "Epaules",
          image: "https://picsum.photos/100"
        },
        {
          id: 4,
          label: "Jambes",
          image: "https://picsum.photos/100"
        },
      ]
    },
    {
      id: 3,
      label: "Etirements",
      data: [
        {
          id: 1,
          label: "Adducteurs",
          image: "https://picsum.photos/100"
        },
        {
          id: 2,
          label: "Dorsaux",
          image: "https://picsum.photos/100"
        },
        {
          id: 3,
          label: "Lombaires",
          image: "https://picsum.photos/100"
        },
        {
          id: 4,
          label: "Bras",
          image: "https://picsum.photos/100"
        },
      ]
    },
  ]
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  async showExerciceDetails(id: number){
    const modal = await this.modalCtrl.create({
      component: ExercicesDetailsComponent,
      componentProps: {
        "id": id
      }
    });
    modal.present();
  }
  async showExercicesByCategories(data: any){
    const modal = await this.modalCtrl.create({
      component: ExercicesByCategoriesComponent,
      componentProps: {
        "data": data
      }
    });
    modal.present();
  }

}
