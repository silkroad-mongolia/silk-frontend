import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userIsAuthenticated = false;
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  onToggleSideNav() {
    this.sidenavToggle.emit();
  }

  onLogout() {}

  ngOnInit() {
  }

  search() {}

}
