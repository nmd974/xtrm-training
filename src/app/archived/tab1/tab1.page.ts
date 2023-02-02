import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
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
}
