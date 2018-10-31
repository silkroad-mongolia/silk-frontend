import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth/auth.service';
import { Event, Router, NavigationStart, NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  showLoadingIndicator = true;

  constructor(private authService: AuthService, private _router: Router) {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    });
  }

  ngOnInit() {
    this.authService.autoAuthUser();
  }
}
