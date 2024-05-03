import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models';
import { map, tap } from 'rxjs';

@Injectable()
export class SigninformService {
  private activeUser!: User;
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('/api/customers', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  login(credentials: { email: string; password: string }) {
    return this.getUsers().pipe(
      map((users) => {
        const targetUser = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        if (!targetUser) {
          return;
        }

        return targetUser;
      }),
      tap((user) => {
        if (user) {
          this.activeUser = user;
          this.isLoggedIn = true;
        }
      })
    );
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isAdmin() {
    return this.activeUser && this.activeUser.role === 'Admin';
  }
}
