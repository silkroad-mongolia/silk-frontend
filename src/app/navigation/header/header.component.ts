import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  onToggleSideNav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(
      isAuthenticated => this.userIsAuthenticated = isAuthenticated
    );
  }

  search() {}

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }

}
