import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './types';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private activeUser: User | undefined = undefined;
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

  logout() {
    this.activeUser = undefined;
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isAdmin() {
    return this.activeUser && this.activeUser.role === 'Admin' ? true : false;
  }

  loggedInUser(id: string) {
    return this.http.get<User>(`/api/customers/${id}`);
  }

  get user() {
    return this.activeUser;
  }

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
