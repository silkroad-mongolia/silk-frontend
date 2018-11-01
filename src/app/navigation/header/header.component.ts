import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import * as URL from 'url-parse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  searchString = '';

  subCategories: SubCategoryModel[] = [];
  categories: CategoryModel[] = [
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Woman Dress', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
    {name: 'Bags', subCategories: [{name: 'tom tsunh', link: '/handbag'}, {name: 'jijig tsunh', link: '/handbag'}]},
  ];
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private authService: AuthService, private router: Router ) {  }

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
  toggleCategory(index: number) {
    this.subCategories = this.categories[index].subCategories;
  }
}
