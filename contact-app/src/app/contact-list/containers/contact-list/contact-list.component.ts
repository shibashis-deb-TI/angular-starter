import { ContactsService } from './../../services/contacts.service'
import { Component } from '@angular/core'
import { Contact } from '../../models/contact.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  contacts!: Array<Contact>

  constructor(
    private contactService: ContactsService,
    private router: Router,
  ) {
    this.contactService
      .getAllContacts()
      .subscribe((contacts) => (this.contacts = contacts))
  }

  addContact() {
    this.router.navigate(['contact', 'new'])
  }
}
