import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './containers/contact/contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

@NgModule({
  declarations: [ContactComponent, ContactListComponent],
  imports: [CommonModule],
  exports: [ContactListComponent, ContactComponent],
})
export class ContactListModule {}
