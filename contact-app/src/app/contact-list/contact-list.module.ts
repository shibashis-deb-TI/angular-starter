import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ContactListComponent } from './containers'
import { ContactComponent, ContactSingleComponent } from './components'
import { ContactsFormComponent } from './containers/contacts-form/contacts-form.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  {
    path: 'contact/new',
    component: ContactsFormComponent,
    data: { isEdit: false },
  },
  {
    path: 'contact/:id',
    component: ContactsFormComponent,
    data: { isEdit: true },
  },
]
@NgModule({
  declarations: [
    ContactListComponent,
    ContactComponent,
    ContactsFormComponent,
    ContactSingleComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [ContactListComponent, ContactsFormComponent],
})
export class ContactListModule {}
