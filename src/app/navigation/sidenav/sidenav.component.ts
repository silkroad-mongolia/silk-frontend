import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  userIsAuthenticated = false;
  @Output() closeSidenav = new EventEmitter<void>();

  constructor( private authService: AuthService) { }

  onClose() {
    this.closeSidenav.emit();
  }

  ngOnInit() {
  }
  onLogout() {
    this.authService.logout();
  }

}
