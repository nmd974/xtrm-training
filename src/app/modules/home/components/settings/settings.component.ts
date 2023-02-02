import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { ItemsWithIcons } from 'src/app/shared/components/UI/item-list/models/items-icons.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  settingsOptions: ItemsWithIcons[] = [
    {
      icon: "notifications-outline",
      label: "Notifications"
    },
    {
      icon: "notifications-outline",
      label: "Notifications"
    },
    {
      icon: "notifications-outline",
      label: "Notifications"
    },
  ]
  constructor(private animationCtrl: AnimationController) { }

  ngOnInit() {}

  ionViewWillLeave(){
    console.log("willLeave settings")
  }


  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(150)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

}
