import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
// import { CategoryModel, SubCategoryModel  } from './header.module';

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
    console.log('searched');
    console.log(this.searchString);
    if (this.searchString.startsWith('https://')) {
      console.log('this is link');
      console.log(this.searchString);
      const url = this.router.parseUrl(decodeURIComponent(this.searchString));
      // console.log(url.queryParamMap);
      console.log(url.queryParams['id']);
      const product_id = url.queryParams['id'];
      console.log(product_id);
      this.router.navigate(['/product?id=' + product_id]);
    }
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  toggleCategory(index: number) {
    this.subCategories = this.categories[index].subCategories;
  }
}
