import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppValidators } from 'src/app/validators';
import { toString } from 'src/app/utils';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
})
export class SigninFormComponent {
  @Output() submitCredentials = new EventEmitter<{
    email: string;
    password: string;
  }>();

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, AppValidators.checkPassword]],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    this.submitCredentials.emit({
      email: toString(this.form.value.email),
      password: toString(this.form.value.password),
    });
  }
}
