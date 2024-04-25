import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactListComponent } from './containers/contact-list/contact-list.component'
import { ContactComponent } from './components/contact/contact.component'
import { ContactFormComponent } from './containers/contact-form/contact-form.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ContactListComponent, ContactComponent, ContactFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [ContactListComponent, ContactFormComponent],
})
export class ContactListModule {}
