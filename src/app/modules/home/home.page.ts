import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  isLoading: boolean = true;
  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

  test(){
    console.log("clicked");
  }

  handleRefresh(event: any) {
    this.isLoading = true;
    setTimeout(() => {
      // Any calls to load data go here
      this.isLoading = false;
      event.target.complete();
    }, 2000);
  };

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("destroyed")
  }
  ionViewWillLeave(){
    console.log("willLeave")
  }

}
