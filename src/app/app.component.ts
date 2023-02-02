import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  closed$ = new Subject<any>();
  showTabs = true; // <-- show tabs by default

  constructor(private _router: Router) { }

  ngOnInit() {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe(event => {
      console.log(event['url']);
      // if (event['url'] === '/somePage') {
      //   this.showTabs = false; // <-- hide tabs on specific pages
      // }
    });
  }

  ngOnDestroy() {
    this.closed$.next(true); // <-- close subscription when component is destroyed
  }
}
