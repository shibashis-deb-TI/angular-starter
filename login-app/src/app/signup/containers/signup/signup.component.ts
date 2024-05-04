import { Component } from '@angular/core';
import { User } from '../../../login';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private service: AppService, private router: Router) {}

  handleSignUp(event: Omit<User, 'id'>) {
    this.service
      .signup({ ...event })
      .subscribe(() => this.router.navigate(['login']));
  }
}
