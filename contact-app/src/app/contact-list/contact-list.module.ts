import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { ContactListComponent, ContactsFormComponent } from './containers'
import { ContactComponent, ContactSingleComponent } from './components'

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
