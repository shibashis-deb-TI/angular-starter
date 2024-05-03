import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AppValidators } from 'src/validators';
import { SignupService } from '../../services';
import { map } from 'rxjs';
import { User } from 'src/app/login';
import { toString } from 'src/utils';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  @Output() addUser = new EventEmitter<Omit<User, 'id'>>();

  form = this.fb.group({
    details: this.fb.group({
      name: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
    }),
    credentials: this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email],
        [this.validateEmail.bind(this)],
      ],
      password: ['', [Validators.required, AppValidators.checkPassword]],
    }),
    role: this.fb.group({
      role: [''],
    }),
  });

  constructor(private fb: FormBuilder, private service: SignupService) {}

  validateEmail(control: AbstractControl) {
    return this.service.checkEmail(control.value).pipe(
      map((value) => {
        return value ? { emailExists: true } : null;
      })
    );
  }

  onSubmit() {
    if (this.form.invalid) {
      return this.form.markAllAsTouched();
    }

    const { details, credentials, role } = this.form.value;

    // replace with zod parse of request body 😅
    this.addUser.emit({
      name: toString(details?.name),
      address: toString(details?.address),
      contact: toString(details?.contact),
      email: toString(credentials?.email),
      password: toString(credentials?.password),
      role: toString(role?.role),
    });
  }
}
