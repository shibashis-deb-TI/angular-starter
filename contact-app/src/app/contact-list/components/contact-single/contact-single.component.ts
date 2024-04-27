import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Contact } from '../../models/contact.model'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-single.component.html',
  styleUrls: ['./contact-single.component.scss'],
})
export class ContactSingleComponent {
  @Input() contact: Contact | undefined

  @Output() create = new EventEmitter<Omit<Contact, 'id'>>()
  @Output() update = new EventEmitter<Contact>()

  onSubmit(form: NgForm) {
    if (this.contact) {
      this.update.emit({ id: this.contact.id, ...form.value })
      return
    }

    this.create.emit(form.value)
  }
}
