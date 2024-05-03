import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { User } from '../models';

@Injectable()
export class SigninformService {
  private users!: Array<User>;
  private activeUser!: User;
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http
      .get<User[]>('/api/customers', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(tap((users) => (this.users = users)));
  }

  login(credentials: { email: string; password: string }) {
    // this.getAllUsers().subscribe();

    // const user = this.get.find(
    //   (user) =>
    //     user.email === credentials.email &&
    //     user.password === credentials.password
    // );

    const user = this.getAllUsers().pipe(
      map((users) => {
        const target = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        if (!target) {
          return;
        }
        return target;
      })
    );

    user.subscribe((value) => console.log(value));

    // if (user) {
    //   this.isLoggedIn = true;
    //   this.activeUser = user;
    // }
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isAdmin() {
    return this.activeUser && this.activeUser.role === 'Admin';
  }
}
