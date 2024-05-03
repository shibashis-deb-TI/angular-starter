import { AbstractControl } from '@angular/forms';

export class AppValidators {
  static checkPassword(control: AbstractControl) {
    // const passwordRegexp = new RegExp('^(?=.*d)(?=.*[^ws])(?=.*[A-Z]).{8,16}$');

    return control.value.length >= 8 &&
      control.value.length <= 16 &&
      control.value.includes('@')
      ? null
      : { invalidPassword: true };
  }
}
