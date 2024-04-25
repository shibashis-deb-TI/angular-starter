import { Component } from '@angular/core';
import { ContactComponent } from '../../containers/contact/contact.component';

@Component({
  selector: 'app-contact-list',
  providers: [ContactComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  contacts = [
    {
      firstName: 'John',
      lastName: 'Doe',
      mobile: 123456789,
      address: 'Somewhere over the rainbow',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      mobile: 123456789,
      address: 'Somewhere over the rainbow',
    },
    {
      firstName: 'John',
      lastName: 'Doe',
      mobile: 123456789,
      address: 'Somewhere over the rainbow',
    },
  ];
}
