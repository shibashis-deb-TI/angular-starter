import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../../login';

@Injectable()
export class SignupService {
  constructor(private http: HttpClient) {}

  checkEmail(email: string) {
    return this.http.get<User[]>('/api/customers').pipe(
      map((users) => {
        const emailList = users.map((user) => user.email);

        return emailList.includes(email);
      })
    );
  }

  signup(user: Omit<User, 'id'>) {
    return this.http.post<User>('/api/customers', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
