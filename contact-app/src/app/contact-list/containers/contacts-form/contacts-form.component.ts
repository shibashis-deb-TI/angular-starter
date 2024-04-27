import { ContactsService } from './../../services/contacts.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Contact } from '../../models/contact.model'

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss'],
})
export class ContactsFormComponent implements OnInit {
  isEdit!: boolean
  contact!: Contact

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService,
  ) {}

  ngOnInit(): void {
    this.isEdit = this.route.snapshot.data['isEdit']

    if (this.isEdit) {
      const id = this.route.snapshot.paramMap.get('id')

      if (!id) {
        this.router.navigate(['contact-list'])
        return
      }

      this.contactsService
        .getContactById(id)
        .subscribe((contact) => (this.contact = contact))
    }
  }

  createContact(contact: Omit<Contact, 'id'>): void {
    this.contactsService
      .create(contact)
      .subscribe((contact) => this.router.navigate(['contact-list']))
  }

  updateContact(contact: Contact): void {
    console.log(contact)
    this.contactsService
      .update(contact)
      .subscribe(() => this.router.navigate(['contact-list']))
  }
}
