import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exercices-details',
  templateUrl: './exercices-details.component.html',
  styleUrls: ['./exercices-details.component.scss'],
})
export class ExercicesDetailsComponent implements OnInit, OnDestroy {
  @Input() id: number;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.id)
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
