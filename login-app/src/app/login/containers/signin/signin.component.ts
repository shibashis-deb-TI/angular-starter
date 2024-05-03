import { Component } from '@angular/core';
import { User } from '../../models';
import { SigninformService } from '../../services';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private service: SigninformService) {}

  handleLogin(event: Pick<User, 'email' | 'password'>) {
    this.service.login({ ...event });
  }
}
