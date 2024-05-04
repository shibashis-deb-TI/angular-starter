import { Component } from '@angular/core';
import { User } from '../../models';
import { AppService } from '../../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  message = '';

  constructor(private service: AppService, private router: Router) {}

  handleLogin(event: Pick<User, 'email' | 'password'>) {
    this.service.login({ ...event }).subscribe((value) => {
      if (!value) {
        this.message = 'Invalid email or password!';
        return;
      }

      this.router.navigate(['dashboard']);
    });
  }
}
