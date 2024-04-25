import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  contacts = new Array(3).fill(undefined).map(() => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phone: faker.number.int(10),
    address: faker.location.streetAddress(),
  })) satisfies Array<Contact>;
}
