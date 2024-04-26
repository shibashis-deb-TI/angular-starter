import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, tap } from 'rxjs'
import { Contact } from '../models/contact.model'

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts!: Array<Contact>

  constructor(private http: HttpClient) {}

  getAllContacts() {
    return this.http
      .get<Contact[]>('/api/contacts', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(tap((contacts) => (this.contacts = contacts)))
  }

  getContactById(id: string) {
    return this.http.get<Contact>(`/api/contact/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
