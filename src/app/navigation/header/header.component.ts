import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import * as URL from 'url-parse';
import {SignupComponent } from '../../auth/signup/signup.component';
import {LoginComponent } from '../../auth/login/login.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  searchString = '';


  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router, public dialog: MatDialog ) {  }

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

  search() {
    if (this.searchString.startsWith('https://item.taobao.com/item')) {
      const url = URL(this.searchString, {} , true);
      const product_id = url.query['id'];
      if (product_id) {
        this.router.navigate(['/product', 'taobao', product_id]);
      }
    }
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  signupDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  loginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
