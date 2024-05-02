import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Contact } from '../../models/contact.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-single.component.html',
  styleUrls: ['./contact-single.component.scss'],
})
export class ContactSingleComponent {
  @Input() contact: Contact | undefined

  @Output() create = new EventEmitter<Omit<Contact, 'id'>>()
  @Output() update = new EventEmitter<Contact>()

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return
    }

    if (this.contact) {
      this.update.emit({ id: this.contact.id, ...form.value })
      return
    }

    this.create.emit(form.value)
  }

  handleUpdate(form: NgForm) {
    if (!form.form.pristine) {
      return this.onSubmit(form)
    }

    const goBack = confirm('Save without any changes?')

    return goBack ? this.router.navigate(['contact-list']) : undefined
  }
}
