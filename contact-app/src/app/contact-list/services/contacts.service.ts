import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { filter, of, tap } from 'rxjs'
import { Contact } from '../models/contact.model'

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: Array<Contact> = []
  isStale: boolean = false

  constructor(private http: HttpClient) {}

  getAllContacts() {
    if (this.contacts.length > 0 && !this.isStale) {
      return of(this.contacts)
    }

    return this.http
      .get<Contact[]>('/api/contacts', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        tap((contacts) => (this.contacts = [...this.contacts, ...contacts])),
      )
  }

  getContactById(id: string) {
    return this.http.get<Contact>(`/api/contacts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  create(contact: Omit<Contact, 'id'>) {
    return this.http
      .post<Contact>('/api/contacts', contact, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(tap(() => (this.isStale = true)))
  }

  update(contact: Contact) {
    const { id, ...rest } = contact
    return this.http
      .put<Contact>(`/api/contacts/${contact.id}`, rest)
      .pipe(tap(() => (this.isStale = true)))
  }
}
