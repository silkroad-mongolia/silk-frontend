import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  private authStatusSub: Subscription;

  cities = ['ub', 'darhan', 'erdenet'];

  signupForm: FormGroup;

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('')]],
      phone: ['', Validators.required],
      addr3: ['', Validators.required],
      addr4: ['', Validators.required],
      addr5: ['', Validators.required],

    });

    this.signupForm.valueChanges.subscribe(console.log);
  }

  get firstname() {
    return this.signupForm.get('firstname');
  }
  get lastname() {
    return this.signupForm.get('lastname');
  }

  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }

  get phone() {
    return this.signupForm.get('phone');
  }
  get addr3() {
    return this.signupForm.get('addr3');
  }
  get addr4() {
    return this.signupForm.get('addr4');
  }
  get addr5() {
    return this.signupForm.get('addr5');
  }

  signup() {
    return this.authService.createUser(this.email.value, this.password.value);
  }

}
