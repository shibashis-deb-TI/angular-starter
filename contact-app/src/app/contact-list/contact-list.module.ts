import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ContactListComponent } from './containers'
import { ContactComponent, ContactFormComponent } from './components'
import { ContactsService } from './services/contacts.service'
import { ContactsFormComponent } from './containers/contacts-form/contacts-form.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  {
    path: 'contact/new',
    component: ContactFormComponent,
    data: { isEdit: false },
  },
  {
    path: 'contact/:id',
    component: ContactFormComponent,
    data: { isEdit: true },
  },
]
@NgModule({
  declarations: [
    ContactListComponent,
    ContactComponent,
    ContactFormComponent,
    ContactsFormComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [ContactListComponent, ContactFormComponent],
})
export class ContactListModule {}
