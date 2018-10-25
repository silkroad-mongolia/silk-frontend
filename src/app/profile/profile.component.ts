import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  cities = ['ub', 'darhan', 'erdenet'];
  profiles = [
    {name: 'profile', link: '/profile'},
    {name: 'yurunhii medeelel', link: '/profile/general'},
    {name: 'Миний захиалгууд', link: '/profile/order'},
  ];
  constructor(private fb: FormBuilder, public authService: AuthService) {  }

  changeForm: FormGroup;
  ngOnInit() {
    this.changeForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('')]],
      password1: ['', [Validators.required, Validators.pattern('')]],
      addr3: ['', [Validators.required]],
      addr4: ['', [Validators.required]],
      addr5: ['', [Validators.required]],
      phone: ['', Validators.required],
      sex: ['', Validators.required],
    });

  }

  get firstname() {
    return this.changeForm.get('firstname');
  }
  get lastname() {
    return this.changeForm.get('lastname');
  }

  get email() {
    return this.changeForm.get('email');
  }
  get password() {
    return this.changeForm.get('password');
  }
  get password1() {
    return this.changeForm.get('password1');
  }
  get phone() {
    return this.changeForm.get('phone');
  }
  get sex() {
    return this.changeForm.get('sex');
  }
  get addr3() {
    return this.changeForm.get('addr3');
  }
  get addr4() {
    return this.changeForm.get('addr4');
  }
  get addr5() {
    return this.changeForm.get('addr5');
  }

  save() {
    return this.authService.createUser(this.email.value, this.password.value);
  }

}
