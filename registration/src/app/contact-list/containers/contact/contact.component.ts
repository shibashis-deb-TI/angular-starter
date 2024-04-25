import { Component, Input } from '@angular/core';
import { ContactListComponent } from '../../components/contact-list/contact-list.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() contact: any;
}
